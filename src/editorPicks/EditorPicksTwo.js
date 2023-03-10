import { editorDataTwo } from "../datanews/EditorDataTwo";
import NewsBlockTemplate from "../components/NewsBlockTemplate";


const EditorPicksOne = () => {
  const newEditorPicksTwo = editorDataTwo.map((e) => {
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
      <div className="classBlocksPicksTwo">{newEditorPicksTwo}</div>
    </div>
  );
};
export default EditorPicksOne;
