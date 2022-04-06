export function TriangleRender({ el }) {
  const k = Array(el).fill(1);
  return (
    <div className="game-board-container-item">
      {k.map((el) => {
        const comp = <span>*</span>;
        return comp;
      })}
    </div>
  );
}
