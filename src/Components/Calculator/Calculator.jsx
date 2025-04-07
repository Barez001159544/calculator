import "./Calculator.css";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import Screen from "./Screen";
import React, { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "÷"],
  [7, 8, 9, "×"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [equation, setEquation] = useState("0");

  return (
    <div className="bg">
      <div className="wrapper">
        <Screen value={equation} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  const btnStr = btn.toString(); // force btn to string
                  const newEquation =
                    equation === "0" ? btnStr : equation + btnStr;
                  setEquation(newEquation);
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })}
        </ButtonBox>
      </div>
    </div>
  );
};

export default Calculator;
