import logo from './logo.svg';
import './App.css';
import FeM from './component/FeM';
import {Routes,Route} from "react-router-dom"
import Estimation from './component/Estimation';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Gallery from './component/Gallery';
function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
   <Route path="/calculator" element={<FeM/>}/>
    <Route path="/price" element={<Estimation/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
   </Routes>
    </div>
  );
}

export default App;
