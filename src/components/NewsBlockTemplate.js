import "./newsBlockTemplate.css"

const NewsBlockTemplate = ({ image, title, description, text }) => {
  return (
    <div className="newsBlockTemplate">
      <div>
        <img src={image} alt="NO IMAGE" className="newsBlockImg" />
      </div>
      <div>
      <h2 className="classTitle">{title}</h2>
      <p className="classDescription">{description}</p>
      <p className="classText">{text}</p>
      </div>
    </div>
  );
};

export default NewsBlockTemplate;
