import { TriangleConstructor } from "../components/TriangleConstructor";

export const RenderTriangles = ({ reverse, value }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: reverse ? "start" : "end",
        textAlign: reverse ? "start" : "end",
      }}
    >
      <TriangleConstructor value={value} reverse={reverse} />
    </div>
  );
};
