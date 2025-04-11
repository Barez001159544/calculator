import "./Calculator.css";

const Screen = ({ value, previously }) => {
  return (
    <div className="screen">
      <h2>{previously}</h2>
      <h1 className={previously ? "medium" : "large"}>{value}</h1>
    </div>
  );
};

export default Screen;
