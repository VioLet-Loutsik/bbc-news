import "./newsTemplate.css";

const SmallTemplate = ({ image, title, text, number }) => {
  const verifySmallNumber = number > 1 ? "small" : "noTemplate";
  return (
    <div className={verifySmallNumber}>
      <div className="imgDivSmall">
        <img src={image} alt="NO IMAGE" className="smallImageNews" />
      </div>
      <div className="whiteTextSmallBlock">
        <h4>{title}</h4>
        <h5>{text}</h5>
      </div>
    </div>
  );
};
export default SmallTemplate;
