import { futurePlanetData } from "../datanews/FuturePlanetData";
import ReelBlockTemplate from "../components/ReelBlockTemplate";
import "../reel/reel.css";
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
        <h1>REEL</h1>
        <p>The most amazing videos from the BBC</p>
      </div>
      <div className="classReel">
        <img src={planetFont} alt="NO IMAGE" />
      </div>
      <div className="classReelBlock">{newsReelData}</div>
    </div>
  );
};
export default Reel;
