import { newsData } from "../datanews/NewsData";
import NewsBlockTemplate from "../components/NewsBlockTemplate";
import "./news.css";

const News = () => {
  const newsPage = newsData.map((e, i) => {
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
        <p className="titleHeader">News</p>      
      </div>
      <div className="newsBlock">{newsPage}</div>
    </>
  );
};
export default News;
