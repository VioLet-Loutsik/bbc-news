import './App.css';
import Header from './header/Header'
import Welcome from './welcome/Welcome';
import News from './news/News';
import Reel from './reel/Reel';
import Sport from './sport/Sport';
import EditorPicks from './editorPicks/EditorPicks';
import FuturePlanet from './futurePlanet/FuturePlanet';


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <News /> 
      <Sport />
      <Reel />  
      <EditorPicks /> 
      <FuturePlanet />  
    </div>
  );
};

export default App;
