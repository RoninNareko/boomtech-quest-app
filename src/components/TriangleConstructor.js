import { TriangleRender } from "./TriangleRender";

export function TriangleConstructor({ value, reverse }) {
  var a = [];
  for (let i = 0; i < value; i++) {
    a[i] = !reverse ? value - i : i + 1;
  }

  return (
    <div className="game-board-item-container">
      {a.map((el) => {
        const comp = <TriangleRender el={el} />;
        return comp;
      })}
    </div>
  );
}
