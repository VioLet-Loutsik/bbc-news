// import BigNewsTemplate from "../components/BigNewsTemplate";
import EditorPicksTemplate from "../components/EditorPicksTemplate";
import { editorDataTwo } from "../datanews/EditorDataTwo";

const EditorPicksOne = () => {
  const newEditorPicksTwo = editorDataTwo.map((e) => {
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
      <div>{newEditorPicksTwo}</div>
    </div>
  );
};
export default EditorPicksOne;
