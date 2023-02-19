import { editorDataThree } from "../datanews/EditorDataThree";
import NewsBlockTemplate from "../components/NewsBlockTemplate";


const EditorPicksThree = () => {
  const newEditorPicksThree = editorDataThree.map((e) => {
    return (
      <NewsBlockTemplate
        image={e.image}
        title={e.title}
        description={e.description}
        text={e.text}
        key={e.id}
      />
    );
  });
  return (
    <div >
      <div className="classBlocksPicksTwo">{newEditorPicksThree}</div>
    </div>
  );
};
export default EditorPicksThree;
