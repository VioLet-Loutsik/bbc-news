import { sportData } from "../datanews/SportData";
import NewsBlockTemplate from "../components/NewsBlockTemplate";
import "./sport.css";

const News = () => {
  const sportPage = sportData.map((e, i) => {
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
    <>
      <div className="classDayTime">
        <p className="titleHeader">Sport</p>
      </div>
      <div className="newsBlock">{sportPage}</div>
    </>
  );
};
export default News;
