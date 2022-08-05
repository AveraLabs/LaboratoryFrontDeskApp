import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import './App.css'; 
import Verification from './Pages/Verification';
// import Home from './Pages/Home'; 
import AllTestToday from './SubPages/AllTestToday';
import DidNotShowUp from './SubPages/DidNotShowUp';
import CancelledAppointment from './SubPages/CancelledAppointment';
import Calender  from './SubPages/Calender';
import PendingBookings from './SubPages/Dashboard';
import UserProfile  from './SubPages/Profile/ViewProfile';
import Start from './SubPages/Profile/Start';

// ccc
function App() {
  return (
    <BrowserRouter>
     <Routes>   
       <Route  path="/" element={<Login />}/>  
        <Route path="login" element={<Login />}/>  
        <Route path="verification" element={<Verification />}  />
        <Route path='frontdesk' element={<PendingBookings />} /> 
        <Route path="allteststoday" element={<AllTestToday />} />  
        <Route path='viewprofile' element={<UserProfile />} /> 
        <Route path='startprofile' element={<Start />} />
        <Route path="didnotshowup" element={<DidNotShowUp />} /> 
        <Route path="cancelledappointment" element={<CancelledAppointment />} /> 
        <Route path="calender" element={<Calender />} /> 
     </Routes>
    </BrowserRouter>
  );
} 

export default App; 
