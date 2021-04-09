import Header from './Header'
import Home from './Home'
import './App.css';

function App() {
  return (
    //BEM convention
    <div className="app">
      
      <Header/>
      <Home />
    </div>
  );
}

export default App;
