import "./newsTemplate.css";

const BigNewsTemplate = ({ image, title, description, text, number }) => {
  const verifyNumber = number < 2 ? "big" : "noTemplate";
  return (
    <div className="blockBigImage">
      <div className={verifyNumber}>
        <div className="imgDivBig">
        <img src={image} alt="NO IMAGE" className="bigImageNews" />
        </div>
        <div className="whiteText">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h5>{text}</h5>
        </div>
      </div>
     </div>
  );
};

export default BigNewsTemplate;
