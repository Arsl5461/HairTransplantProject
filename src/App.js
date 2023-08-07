import logo from './logo.svg';
import './App.css';
import FeM from './component/FeM';
import {Routes,Route} from "react-router-dom"
import Estimation from './component/Estimation';
function App() {
  return (
    <div className="App">
   <Routes>
   <Route path="/" element={<FeM/>}/>
    <Route path="/price" element={<Estimation/>}/>
   </Routes>
    </div>
  );
}

export default App;
