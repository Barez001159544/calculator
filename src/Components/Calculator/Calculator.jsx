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
                  let btnStr = btn.toString();
                  if (btnStr === "=") {
                    const sanitizedEquation = equation
                      .replace(/×/g, "*")
                      .replace(/÷/g, "/");
                    const lastChar = sanitizedEquation.slice(-1);
                    if (/[+\-*/.]/.test(lastChar)) {
                      return;
                    }
                    const result = eval(sanitizedEquation).toString();
                    setEquation(result);
                  } else if (btnStr === "C") {
                    setEquation("0");
                  } else if (btnStr === "%") {
                    const hasOperator = /[+\-*/×÷]/.test(equation);
                    if (hasOperator) {
                      return;
                    }
                    // FINISH THIS!
                  } else {
                    const operators = ["+", "-", "*", "/", ".", "×", "÷"];
                    const lastChar = equation.slice(-1);

                    const isLastCharOperator = operators.includes(lastChar);
                    const isBtnOperator = operators.includes(btnStr);

                    if (isLastCharOperator && isBtnOperator) {
                      return;
                    }

                    let newEquation = "";
                    if (btnStr === "+-") {
                      if (lastChar !== "-") {
                        newEquation = equation === "0" ? "-" : equation + "-";
                      } else {
                        return;
                      }
                    } else {
                      newEquation =
                        equation === "0" ? btnStr : equation + btnStr;
                    }
                    setEquation(newEquation);
                  }
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
