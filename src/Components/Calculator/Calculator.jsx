import "./Calculator.css";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import Screen from "./Screen";
import React, { useState } from "react";
import CalculatorBackground from "./CalculatorBackground";
import Wrapper from "./Wrapper";

const btnValues = [
  ["C", "+-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const Calculator = () => {
  const [equation, setEquation] = useState("0");

  const EqualHandler = () => {
    const sanitizedEquation = equation.replace(/×/g, "*").replace(/÷/g, "/");
    const lastChar = sanitizedEquation.slice(-1);
    if (/[+\-*/.]/.test(lastChar)) {
      return;
    }
    const result = eval(sanitizedEquation).toString();
    setEquation(result);
  };

  const CleanHandler = () => {
    setEquation("0");
  };

  const PercentageHandler = () => {
    const hasOperator = /[+\-*/×÷]/.test(equation);
    if (hasOperator) {
      return;
    }
    const result = eval(equation + "/10").toString();
    setEquation(result);
  };

  const NumbersAndOperatorsHandler = (btn) => {
    const operators = ["+", "-", "*", "/", ".", "×", "÷"];
    const lastChar = equation.slice(-1);

    const isLastCharOperator = operators.includes(lastChar);
    const isBtnOperator = operators.includes(btn);

    if (equation === "0" && isBtnOperator && btn !== "-") {
      return;
    }

    if (isLastCharOperator && isBtnOperator) {
      return;
    }

    let newEquation = "";
    if (btn === "+-") {
      if (lastChar !== "-" && lastChar !== ".") {
        newEquation = equation === "0" ? "-" : equation + "-";
      } else {
        return;
      }
    } else {
      newEquation = equation === "0" ? btn : equation + btn;
    }
    setEquation(newEquation);
  };

  return (
    <CalculatorBackground>
      <Wrapper>
        <Screen value={equation} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  if (btn === "=") {
                    EqualHandler();
                  } else if (btn === "C") {
                    CleanHandler();
                  } else if (btn === "%") {
                    PercentageHandler();
                  } else {
                    NumbersAndOperatorsHandler(btn);
                  }
                }}
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
    </CalculatorBackground>
  );
};

export default Calculator;
