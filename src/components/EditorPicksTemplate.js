const EditorPicksTemplate = ({ image, title, description, text }) => {
  return (
    <div>
      <div className="editorsFirstNews">
        <div>
          <img src={image} alt={title} />
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
export default EditorPicksTemplate;
