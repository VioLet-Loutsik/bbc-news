// import BigNewsTemplate from "../components/BigNewsTemplate";
import EditorPicksTemplate from "../components/EditorPicksTemplate";
import { editorPicksData } from "../datanews/EditorPicksData";

const EditorPicks = () => {
  const newEditorPicks = editorPicksData.map((e) => {
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
export default EditorPicks;
