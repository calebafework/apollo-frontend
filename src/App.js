import './App.css';
import Header from './components/Header'
// import CommentList from './components/CommentList'
import Routes from './config/Routes'
import apollo from "./ApolloCytharoedus.svg"

function App() {
  return (
    <div className= "App">
      <Header/>
      { Routes }
      <img src={apollo} className="image" alt='img1'></img>
    </div>
  );
}

export default App;
