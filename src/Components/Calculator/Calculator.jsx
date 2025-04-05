import "./Calculator.css";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import Screen from "./Screen";

const btnValues = [
  ["C", "+-", "%", "÷"],
  [7, 8, 9, "×"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  return (
    <div className="bg">
      <div className="wrapper">
        <Screen value={0} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
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
