import './App.css';
import Header from './header/Header'
import Welcome from './welcome/Welcome';
import News from './news/News';


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <News /> 
      <News />     
    </div>
  );
}

export default App;
