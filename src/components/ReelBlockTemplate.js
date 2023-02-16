import "./reelBlockTemplate.css";

const ReelBlockTemplate = ({ image, title }) => {
  return (
    <div>
      <div className="reelBlockNews">
        <img src={image} alt="NO IMAGE" />
      </div>
      <div className="reeltextNews">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
export default ReelBlockTemplate;
