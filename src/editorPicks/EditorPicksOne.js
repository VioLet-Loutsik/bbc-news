// import BigNewsTemplate from "../components/BigNewsTemplate";
import EditorPicksTemplate from "../components/EditorPicksTemplate";
import { editorDataOne } from "../datanews/EditorDataOne";

const EditorPicksOne = () => {
  const newEditorPicks = editorDataOne.map((e) => {
    return (
      <EditorPicksTemplate
        image={e.image}
        title={e.title}
        description={e.description}
        text={e.text}
        key={e.id}
      />
    );
  });
  return (
    <div>      
      <div>{newEditorPicks}</div>
    </div>
  );
};
export default EditorPicksOne;
