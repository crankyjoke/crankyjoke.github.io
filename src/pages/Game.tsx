import { useState } from "react";
import "./Game.css"


function shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initialize(): string[] {
    const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"] as const;
    const suits = ["S","C","H","D"] as const;

    const cards: string[] = [];
    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            cards.push(values[v] + suits[s]);
        }
    }
    return shuffle(cards);
}

function swap<T>(arr: T[], i: number, j: number): T[] {
    const copy = [...arr];
    [copy[i], copy[j]] = [copy[j], copy[i]];
    return copy;
}

function cardLabel(card: string) {
    const value = card.slice(0, -1);
    const suit = card.slice(-1);
    const suitSymbol: Record<string, string> = { S: "♠", C: "♣", H: "♥", D: "♦" };
    return `${value}${suitSymbol[suit] ?? suit}`;
}

type RowProps = {
    rowIndex: number;
    arr: string[];
    selected: number | null;
    onCardClick: (deckIndex: number) => void;
};

function Row({ rowIndex, arr, selected, onCardClick }: RowProps) {
    const start = rowIndex * 13;
    const slice = arr.slice(start, start + 13);

    return (
        <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {slice.map((card, offset) => {
                const deckIndex = start + offset;
                const isSelected = selected === deckIndex;

                const suit = card.slice(-1);
                const isRed = suit === "H" || suit === "D";

                return (
                    <button
                        key={`${card}-${deckIndex}`}
                        onClick={() => onCardClick(deckIndex)}
                        style={{
                            width: 60,
                            height: 84,
                            borderRadius: 12,
                            border: isSelected ? "3px solid #2563eb" : "1px solid #cbd5e1",
                            background: "white",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                            cursor: "pointer",
                            fontWeight: 800,
                            color: isRed ? "#b91c1c" : "#0f172a",
                        }}
                        title="Click two cards to swap"
                    >
                        {cardLabel(card)}
                    </button>
                );
            })}
        </div>
    );
}


export default function Game() {
    const [deck, setDeck] = useState<string[]>(() => initialize());
    const [selected, setSelected] = useState<number | null>(null);
    const [status, setStatus] = useState("incomplete");
    const VALUES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    function checkRow(row_index: number, d: string[]): boolean {
        const seen = Array(13).fill(false);

        for (let i = 0; i < 13; i++) {
            const card = d[row_index * 13 + i];
            if (!card) return false;

            const value = card.slice(0, -1);
            const index = VALUES.indexOf(value);
            if (index !== -1) seen[index] = true;
        }

        return seen.every(Boolean);
    }


    function handleCardClick(deckIndex: number) {
        if (selected === null) {
            setSelected(deckIndex);
            return;
        }
        if (selected === deckIndex) {
            setSelected(null);
            return;
        }

        const sameColumn = (selected % 13) === (deckIndex % 13);
        if (!sameColumn) {
            setSelected(deckIndex);
            return;
        }

        setDeck((d) => {
            const next = swap(d, selected, deckIndex);

            if (
                checkRow(0, next) &&
                checkRow(1, next) &&
                checkRow(2, next) &&
                checkRow(3, next)
            ) {
                setStatus("complete");
            } else {
                setStatus("incomplete");
            }

            return next;
        });

        setSelected(null);
    }



    return (
        <div className="game">
            <h1>Application of Graph theory</h1>
            <p>Try swapping the cards in each column so that each row has all A,2,3,4,5,6,7,8,9,10,J,Q,K</p>

            <div style={{ padding: 16 }}>
                <button onClick={() => { setDeck(initialize()); setSelected(null); }}>
                    Reshuffle
                </button>

                <Row rowIndex={0} arr={deck} selected={selected} onCardClick={handleCardClick} />
                <Row rowIndex={1} arr={deck} selected={selected} onCardClick={handleCardClick} />
                <Row rowIndex={2} arr={deck} selected={selected} onCardClick={handleCardClick} />
                <Row rowIndex={3} arr={deck} selected={selected} onCardClick={handleCardClick} />

            </div>
            <h2>{status}</h2>
        </div>
    );
}
