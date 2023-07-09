import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Chess from "./components/Chess";
import Carrom from "./components/Carrom";
import Mynavlinks from "./components/Mynavlinks";
import NavScrollExample from "./components/NavScrollExample";
import Racecars from "./components/Racecars";
import Virtual from "./components/Virtual";
import ATV from "./components/ATV";
import Bungee from "./components/Bungee";
import Contactus from "./components/Contactus";
import Login from "./components/Login";
import Circadian from "./components/Circadian";
import HighRope from "./components/HighRope";
import Updateid from "./components/Updateid";
import SignIn from "./components/SignIn";
import Rappling from "./components/Rappling";
import Aboutus from "./components/Aboutus";
import Booking from "./components/Booking";
import Register from "./components/Register"
import AppointmentList from "./components/AppointmentList";
function App() {
  return (
   <>
   <BrowserRouter>
   <Mynavlinks/>
   <Routes>
   
          <Route path="/Chess" element={<Chess/>} />
          <Route path="/Carrom" element={<Carrom/>} />
          <Route path="/Racecars" element={<Racecars/>} />
          <Route path="/" element={<NavScrollExample/>} />
          <Route path="/Virtual" element={<Virtual/>}/>
          <Route path="/ATV" element={<ATV/>}/>
          <Route path="/trampoline" element={<Bungee/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/circadian" element={<Circadian/>}/>
          <Route path="/HighRope" element={<HighRope/>}/>
          <Route path="/Updateid" element={<Updateid/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/Rappling" element={<Rappling/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Booking" element={<Booking/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/AppointmentList" element={<AppointmentList/>}/>
</Routes>


</BrowserRouter>
   </>
  );
}

export default App;


