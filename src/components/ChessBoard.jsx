import Row from "./Row";

export default function ChessBoard() {
  const board = [
    [
      { value: "♖", isGreen: false },
      { value: "♘", isGreen: true },
      { value: "♗", isGreen: false },
      { value: "♔", isGreen: true },
      { value: "♕", isGreen: false },
      { value: "♗", isGreen: true },
      { value: "♘", isGreen: false },
      { value: "♖", isGreen: true },
    ],
    [
      { value: "♙", isGreen: true },
      { value: "♙", isGreen: false },
      { value: "♙", isGreen: true },
      { value: "♙", isGreen: false },
      { value: "♙", isGreen: true },
      { value: "♙", isGreen: false },
      { value: "♙", isGreen: true },
      { value: "♙", isGreen: false },
    ],
    ...Array(4).fill(
      Array(8).fill({ value: "", isGreen: false })
    ),
    [
      { value: "♟", isGreen: false },
      { value: "♟", isGreen: true },
      { value: "♟", isGreen: false },
      { value: "♟", isGreen: true },
      { value: "♟", isGreen: false },
      { value: "♟", isGreen: true },
      { value: "♟", isGreen: false },
      { value: "♟", isGreen: true },
    ],
    [
      { value: "♜", isGreen: true },
      { value: "♞", isGreen: false },
      { value: "♝", isGreen: true },
      { value: "♛", isGreen: false },
      { value: "♚", isGreen: true },
      { value: "♝", isGreen: false },
      { value: "♞", isGreen: true },
      { value: "♜", isGreen: false },
    ],
  ];

  return (
    <div>
      {board.map((row, index) => (
        <Row key={index} squares={row} />
      ))}
    </div>
  );
}