import { useState } from "react";

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
    const start = rowIndex * 10;
    const slice = arr.slice(start, start + 10);

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

    function handleCardClick(deckIndex: number) {
        if (selected === null) {
            setSelected(deckIndex);
            return;
        }
        if (selected === deckIndex) {
            setSelected(null);
            return;
        }
        const sameColumn = (selected % 10) === (deckIndex % 10);
        if (!sameColumn) {

            setSelected(deckIndex);
            return;
        }
        setDeck((d) => swap(d, selected, deckIndex));
        setSelected(null);
    }


    return (
        <div style={{ padding: 16 }}>
            <button onClick={() => { setDeck(initialize()); setSelected(null); }}>
                Reshuffle
            </button>

            <Row rowIndex={0} arr={deck} selected={selected} onCardClick={handleCardClick} />
            <Row rowIndex={1} arr={deck} selected={selected} onCardClick={handleCardClick} />
            <Row rowIndex={2} arr={deck} selected={selected} onCardClick={handleCardClick} />

        </div>
    );
}
