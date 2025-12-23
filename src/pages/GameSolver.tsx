type Swap = [number, number];

const VALUES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"] as const;

function rankIndex(card: string): number {
    const value = card.slice(0, -1);
    return VALUES.indexOf(value as any);
}

function findPerfectMatching(edgeLists: number[][][]): number[] | null {
    const R = 13;
    const C = 13;


    const matchColToRank = Array(C).fill(-1);

    function dfs(r: number, seenCols: boolean[]): boolean {
        for (let c = 0; c < C; c++) {
            if (seenCols[c]) continue;
            if (edgeLists[r][c].length === 0) continue;
            seenCols[c] = true;

            if (matchColToRank[c] === -1 || dfs(matchColToRank[c], seenCols)) {
                matchColToRank[c] = r;
                return true;
            }
        }
        return false;
    }


    for (let r = 0; r < R; r++) {
        const seenCols = Array(C).fill(false);
        if (!dfs(r, seenCols)) return null;
    }


    const rankToCol = Array(R).fill(-1);
    for (let c = 0; c < C; c++) {
        const r = matchColToRank[c];
        if (r !== -1) rankToCol[r] = c;
    }
    return rankToCol.every(x => x !== -1) ? rankToCol : null;
}

function generateColumnSwapsToTarget(current: string[], target: string[]): Swap[] {
    const swaps: Swap[] = [];
    const cur = [...current];


    for (let c = 0; c < 13; c++) {
        const pos = [0,1,2,3].map(r => r * 13 + c);


        const indexOfCard = new Map<string, number>();
        for (const p of pos) indexOfCard.set(cur[p], p);

        for (const p of pos) {
            const want = target[p];
            if (cur[p] === want) continue;

            const q = indexOfCard.get(want);
            if (q === undefined) {

                continue;
            }

            const a = cur[p], b = cur[q];
            cur[p] = b; cur[q] = a;

            // update map
            indexOfCard.set(cur[p], p);
            indexOfCard.set(cur[q], q);

            swaps.push([p, q]);
        }
    }

    return swaps;
}

export function solveByHall(deck: string[]): { solvedDeck: string[]; swaps: Swap[] } {
    if (deck.length !== 52) throw new Error("Deck must have 52 cards");


    const edgeLists: number[][][] = Array.from({ length: 13 }, () =>
        Array.from({ length: 13 }, () => [] as number[])
    );

    for (let idx = 0; idx < 52; idx++) {
        const c = idx % 13;
        const r = rankIndex(deck[idx]);
        if (r < 0) throw new Error(`Unknown rank in card: ${deck[idx]}`);
        edgeLists[r][c].push(idx);
    }


    const assignment = Array(52).fill(-1);


    for (let row = 0; row < 4; row++) {
        const rankToCol = findPerfectMatching(edgeLists);
        if (!rankToCol) {

            throw new Error("No perfect matching found (unexpected)");
        }


        for (let r = 0; r < 13; r++) {
            const c = rankToCol[r];
            const list = edgeLists[r][c];
            const cardIndex = list.pop();
            if (cardIndex === undefined) throw new Error("Edge list empty (unexpected)");
            assignment[cardIndex] = row;
        }
    }

    const solvedDeck = Array(52).fill("") as string[];
    for (let idx = 0; idx < 52; idx++) {
        const c = idx % 13;
        const row = assignment[idx];
        if (row < 0) throw new Error("Unassigned card (unexpected)");
        const targetPos = row * 13 + c;
        solvedDeck[targetPos] = deck[idx];
    }

    const swaps = generateColumnSwapsToTarget(deck, solvedDeck);
    return { solvedDeck, swaps };
}

export function applySwaps(deck: string[], swaps: Swap[]): string[] {
    const d = [...deck];
    for (const [i, j] of swaps) {
        const tmp = d[i];
        d[i] = d[j];
        d[j] = tmp;
    }
    return d;
}
