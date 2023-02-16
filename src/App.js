import './App.css';
import Header from './header/Header'
import Welcome from './welcome/Welcome';
import News from './news/News';
import Reel from './reel/Reel';


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <News /> 
      <News />
      <Reel />     
    </div>
  );
}

export default App;
