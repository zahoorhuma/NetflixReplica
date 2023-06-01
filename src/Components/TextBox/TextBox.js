import "./TextBox.css";
function TextBox({ simpleText, boldText }) {
  return (
    <div className="text-box">
      <div className="bold">{boldText}</div>
      <div className="simple">{simpleText}</div>
    </div>
  );
}

export default TextBox;
