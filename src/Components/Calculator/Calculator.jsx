import "./Calculator.css";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  return (
    <div className="bg">
      <div className="wrapper">
        <div className="screen"></div>
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
