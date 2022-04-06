import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { RenderTriangles } from "./components/RenderTriangles";
import "./App.css";

function App() {
  const [reverse, setReverse] = useState(false);

  const [value, setValue] = useState(0);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    setReverse(!reverse);
  };
  return (
    <div className="game">
      <div className="game-content">
        <Form>
          <Form.Control
            placeholder="Enter the number"
            onChange={onChangeHandler}
          />
        </Form>
        <div className="game-board">
          <div className="game-board-container">
            <div className="game-board-content">
              <RenderTriangles reverse={reverse} value={value} />
            </div>
          </div>
        </div>
        <Button onClick={onClickHandler} variant="primary" id="reverse-button">
          Reverse
        </Button>
      </div>
    </div>
  );
}

export default App;
