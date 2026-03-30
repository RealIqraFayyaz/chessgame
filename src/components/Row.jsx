import Square from "./Square";

export default function Row({ squares }) {
  return (
    <div>
      {squares.map((sq, index) => (
        <Square
          key={index}
          value={sq.value}
          isGreen={sq.isGreen}
        />
      ))}
    </div>
  );
}