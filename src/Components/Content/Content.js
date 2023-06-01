import ImageBox from "../ImageBox/ImageBox";
import TextBox from "../TextBox/TextBox";
import { mainData } from "../../Constant";
import "./Content.css";
function Content() {
  return (
    <div className="main-content">
      {mainData.map((i) => {
        console.log("===>", i);
        return (
          <>
            {i.isBox && <div className="emptyDiv"></div>}
            <div className="container" key={i.id}>
              <TextBox simpleText={i.simpleText} boldText={i.boldText} />
              <ImageBox src={i.src} />
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Content;
