import "./editorPicksTemplate.css";

const EditorPicksTemplate = ({ image, title, description, text, id }) => {
  return (
    <div>
      <div className="editorsFirstNews">
        <div className="imageEditorPick">
          <img src={image} alt={title} />
        </div>
        <div className="imageEditorText">
          <h1>{title}</h1>
          <h3>{description}</h3>
          <p className="textEditNews">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default EditorPicksTemplate;
