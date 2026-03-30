export default function Square({ value, isGreen }) {
  return (
    <div className={`box ${isGreen ? "green" : ""}`}>
      {value}
    </div>
  );
}