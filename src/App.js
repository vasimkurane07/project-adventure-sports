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
function App() {
  return (
   <>
   <BrowserRouter>
   <Mynavlinks/>
   <Routes>
   <Route path="/" element={<Home/>} />
          <Route path="/Chess" element={<Chess/>} />
          <Route path="/Carrom" element={<Carrom/>} />
          <Route path="/Racecars" element={<Racecars/>} />
          <Route path="/nav" element={<NavScrollExample/>} />
          <Route path="/Virtual" element={<Virtual/>}/>
          <Route path="/ATV" element={<ATV/>}/>
          <Route path="/trampoline" element={<Bungee/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/circadian" element={<Circadian/>}/>
          <Route path="/HighRope" element={<HighRope/>}/>
          <Route path="/Updateid" element={<Updateid/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
</Routes>


</BrowserRouter>
   </>
  );
}

export default App;


function Home(){
  return(
    <>
    <h1>hellloooouu</h1>
    </>
  )
}