import './App.css';
import Header from './components/Header'
import CommentList from './components/CommentList'
import Routes from './config/Routes'

function App() {
  return (
    <div className= "App">
      <Header/>
      { Routes }
    </div>
  );
}

export default App;
