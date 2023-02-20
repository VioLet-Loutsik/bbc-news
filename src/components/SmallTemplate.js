import "./newsTemplate.css";

const SmallTemplate = ({ image, title, text, number }) => {
  const verifySmallNumber = number > 1 ? "small" : "noTemplate";
  return (
    <div className={verifySmallNumber}>
      <div className="imgDivSmall">
        <img src={image} alt="NO IMAGE" className="smallImageNews" />
      </div>
      <div className="whiteTextSmallBlock">
        <h4 className="titleStyle">{title}</h4>
        <h6 className="textStyle">{text}</h6>
      </div>
    </div>
  );
};
export default SmallTemplate;
