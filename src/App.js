import logo from './logo.svg';
import './App.css';
import FeM from './component/FeM';
import {Routes,Route} from "react-router-dom"
import Estimation from './component/Estimation';
import Navbar from './component/Navbar';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
   <Route path="/calculator" element={<FeM/>}/>
    <Route path="/price" element={<Estimation/>}/>
   </Routes>
    </div>
  );
}

export default App;
