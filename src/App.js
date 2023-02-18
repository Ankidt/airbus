import './App.css';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import backg from './component/5858.jpg'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Result from './component/Result';
import Login from './component/Login/Login';
import MediumContextProvider from './component/context/MediumContextProvider';
 

function App() {
  return (
      <div 
       style={{backgroundImage: `url(${backg})`}}>
       <MediumContextProvider>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} >
          </Route>
          <Route exact path='/:id' element={<Dashboard/>} >
          </Route>
         
          <Route exact path='/Login' element={<Login/>} >
          </Route>
          <Route exact path='/checkout' element={<Result/>} >
          </Route>
         
        </Routes>
      </Router>
      </MediumContextProvider>
    </div>
  );
}

export default App;