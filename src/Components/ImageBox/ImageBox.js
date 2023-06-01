import "./ImageBox.css";
function ImageBox({ src }) {
  return (
    <div className="picture-box">
      <img className="pic" src={src} alt="some movie here" />
    </div>
  );
}

export default ImageBox;
