import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import BoardPage from './component/BoardPage';
import { Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='main_menu'>
        <Link to='/'>Home</Link>
        <Link to='/board'>Board</Link>
      </div>
      <hr/> 
     <Route path="/" component={HomePage} exact/>
     <Route path="/Board" component={BoardPage}/>
    </div>
  );
}

export default App;
