import { Link } from "react-router-dom";


function Mynavlinks(){
   return(
   <>
    
    <Link to={"/Chess"}>Chess |</Link>
    <Link to={"/Carrom"}>Carrom|</Link>
    <Link to={"/nav"}>nav|</Link>
    <Link to={"/Racecars"}>Racingcar |</Link>
    <Link to={"/Virtual"}>Virtual|</Link>
    <Link to={"/ATV"}>ATV|</Link>
    <Link to={"/Contactus"}>Contactus|</Link>
    <Link to={"/Login"}>Login|</Link>
  </>
);
}
export default Mynavlinks;
