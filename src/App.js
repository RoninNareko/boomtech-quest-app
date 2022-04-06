import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

import "./App.css";

const generatedat = (n) => {
  let a = [];
  for (let i = 0; i < n; i++) {
    a.push(["*".repeat(n - i)]);
  }
  console.log(a, "generatedat");
  return a;
};

const generatedatRevers = (m) => {
  let n = m;
  let a = [];
  for (let i = n; i > 0; i--) {
    a.push(["*".repeat(n - i + 1)]);
  }
  console.log(a, "generatedatRevers");
  return a;
};

const RenderTriangles = ({ reverse, arr_el }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: reverse ? "start" : "end",
      }}
    >
      <br />
      {arr_el.map((el, idx) => {
        return (
          <div key={idx + 1}>
            <p>{el}</p>
          </div>
        );
      })}
    </div>
  );
};
function App() {
  const textInput = useRef(null);
  const [triangles, setTriangles] = useState([]);
  const [reverse, setReverse] = useState(false);

  const onChangeHandler = (e) => {
    e.preventDefault();
    !reverse
      ? setTriangles(generatedat(textInput.current.value))
      : setTriangles(generatedatRevers(textInput.current.value));
  };
  const onClickHandler = (e) => {
    setReverse(!reverse);
    !reverse
      ? setTriangles(generatedatRevers(textInput.current.value))
      : setTriangles(generatedat(textInput.current.value));
  };
  return (
    <div className="game">
      <div className="game-content">
        <Form>
          <Form.Control
            ref={textInput}
            placeholder="Enter the number"
            onChange={onChangeHandler}
          />
        </Form>
        <div className="game-board">
          <div className="game-board-container">
            <div className="game-board-content">
              {triangles.map((arr_el, idx) => {
                return (
                  <RenderTriangles
                    key={idx + 1}
                    reverse={reverse}
                    arr_el={arr_el}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Button onClick={onClickHandler} variant="primary" id="game-button">
          Reverse
        </Button>
      </div>
    </div>
  );
}

export default App;
