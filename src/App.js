import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import './App.css'; 
import Verification from './Pages/Verification';
import Home from './Pages/Home'; 

function App() {
  return (
    <BrowserRouter >
     <Routes>   
       <Route path="/" element={<Login />}/>  
        <Route path="/login" element={<Login />}/>  
        <Route path="/verification" element={<Verification />}  />
        <Route path='/frontdesk' element={<Home />} />
     </Routes>
    </BrowserRouter>
  );
} 

export default App; 
