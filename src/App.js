import './App.css';
import Header from './header/Header'
import Welcome from './welcome/Welcome';
import News from './news/News';
import Reel from './reel/Reel';
import EditorPicks from './editorPicks/EditorPicks';


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <News /> 
      <News />
      <Reel />  
      <EditorPicks />   
    </div>
  );
};

export default App;
