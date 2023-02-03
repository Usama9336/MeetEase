//import logo from './logo.svg';
import './App.css';
import { Router,Routes
,Route } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
function App() {
  return (
    <div className="">
      
    <Routes>
      <Route path='/' element={<Home/>} />
    <Route path='/room/:roomid' element={<Room/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
