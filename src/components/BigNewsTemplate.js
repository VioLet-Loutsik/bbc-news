import "./newsTemplate.css";

const BigNewsTemplate = ({ image, title, description, text, number }) => {
  const verifyNumber = number < 2 ? "big" : "noTemplate";
  return (
    <div className="blockBigImage">
      <div className={verifyNumber}>
        <div className="imgDivBig">
          <img src={image} alt="NO IMAGE" className="bigImageNews" />
        </div>
        <div className="whiteTextBigBlock">
          <h3>{title}</h3>
          <p className="descriptionBigBlock">{description}</p>
          <h6>{text}</h6>
        </div>
      </div>
    </div>
  );
};

export default BigNewsTemplate;
