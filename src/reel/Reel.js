import { reelData } from "../datanews/ReelData";
import ReelBlockTemplate from "../components/ReelBlockTemplate";
import "./reel.css";
// import reelFont1 from "../images/reelFont1.jpg";

const Reel = () => {
  const newsReelData = reelData.map((e) => {
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
        {/* <img src={reelFont1} alt="NO IMAGE" /> */}
      </div>
      <div className="classReelBlock">{newsReelData}</div>
    </div>
  );
};
export default Reel;
