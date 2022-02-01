import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import CandidatePortal from './Components/CandidatePortal';
import Exam from './Components/Exam';

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/CandidatePortal" element={<CandidatePortal/>}/>
       <Route path="/Exam" element={<Exam/>} />
     </Routes>
   </Router>
  );
}

export default App;
