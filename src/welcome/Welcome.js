import BigNewsTemplate from "../components/BigNewsTemplate";
import "./welcome.css";
import { welcomeData } from "../datanews/WelcomeData";
import SmallTemplate from "../components/SmallTemplate";

const Welcome = () => {
  const welcomeSmallPage = welcomeData.map((e, i) => {
    return (
      <SmallTemplate
        image={e.image}
        title={e.title}
        text={e.text}
        key={e.id}
        number={e.id}
      />
    );
  });

  const welcomePage = welcomeData.map((e, i) => {
    return (
      <BigNewsTemplate
        image={e.image}
        title={e.title}
        description={e.description}
        text={e.text}
        key={e.id}
        number={e.id}
      />
    );
  });
  return (
    <>
      <div className="classDayTime">
        <p className="titleHeader">Welcome to BBC.com</p>
        <p>Thursday, 2 February</p>
      </div>
      <div className="welcomeBlock">
        <div className="leftBlockNews">{welcomePage}</div>
        <div className="rightBlockNews">{welcomeSmallPage}</div>
      </div>
    </>
  );
};
export default Welcome;
