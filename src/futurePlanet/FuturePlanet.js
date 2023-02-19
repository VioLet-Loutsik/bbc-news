import { futurePlanetData } from "../datanews/FuturePlanetData";
import ReelBlockTemplate from "../components/ReelBlockTemplate";
import "./futurePlanet.css";
import planetFont from "../images/planetFont.jpg";

const Reel = () => {
  const newsReelData = futurePlanetData.map((e) => {
    return (
      <ReelBlockTemplate
        image={e.image}
        title={e.title}
        description={e.description}
        text={e.text}
        key={e.id}
      />
    );
  });

  return (
    <div className="blockRelativReel">
          <div className="reelText">
        <h3>Future Planet</h3>
        <p>Solutions for a sustainable world</p>
      </div>
      <div className="classReel">
        <img src={planetFont} alt="NO IMAGE" className="imageShadow"/>
      </div>
      <div className="classReelBlock">{newsReelData}</div>
    </div>
  );
};
export default Reel;
