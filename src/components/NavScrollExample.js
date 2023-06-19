import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css";
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";




function NavScrollExample() {
  const navigate = useNavigate();
  let chess=()=>{
    navigate("/Chess")
  }

  let carrom=()=>{
    navigate("/Carrom")
  }
  let navi1=()=>{
    navigate("/Racecars")
  }
  let navi10=()=>{
    navigate("/Virtual")
  }
  let navi2=()=>{
    navigate("/Virtual")
  }
  let navi3=()=>{
    navigate("/circadian")
  }
  let navi4=()=>{"/circadian"}
  let navi5=()=>{}
  let navi6=()=>{}
  let navi7=()=>{
    navigate("/trampoline" )
  }
  let navi8=()=>{}
  let navi9=()=>{}
  return (
    <>
    <Helmet>
      <script src="assests/Filter.js">
      
      </script>
    </Helmet>
     <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand brand" href="#">
            <h1>Apex Adventure</h1>
          </a>
          <button
            className="navbar-toggler bg-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "burlywood" }}
                  
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "burlywood" }}>
                  Adventure Activities
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "burlywood" }}
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Restaurent
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shooping
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-warning me-2" type="submit">
                Sign In
              </button>
              <button className="btn btn-warning" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
   
   <div className="carousel-inner">
     <div className="carousel-item active c-item">
       <img src="assests/images/bungee.webp" className="d-block w-100 img-item" alt="..."/>
       <div className="carousel-caption d-none d-md-block add ">
         
         <h1>Unlimited Adventure with
           50+ Adrenaline Pumping Activities</h1>
       </div>
     </div>
     
   </div>
  
 </div>

<ul className="nav nav-pills bg-dark list">
<li className="nav-item">
 <a className="nav-link active sublist " aria-current="page" href="#"  >Activities</a>
</li>
<li className="nav-item">
 <a className="nav-link" href="#" style={{ color: "white" }}>Home</a>
</li>
<li className="nav-item">
 <a className="nav-link" href="#" style={{ color: "white" }}>discover</a>
</li>
<li className="nav-item">
 <a className="nav-link disabled">Disabled</a>
</li>
</ul>
<nav className="navbar navbar-expand-lg sub-navbar"> 
 <div className="collapse navbar-collapse filter" id="nav" >
<h3><button className="btn btn-light" >FILTER By:</button></h3>
<h3><button className="btn btn-light">daypass</button></h3>
<h3><button className="btn btn-light">jumbopass</button></h3>
<h3><button className="btn btn-light">kids friendly</button></h3>

</div>
<button className="navbar-toggler" data-toggle="collapse" data-target="#nav"><span className="navbar-toggler-icon"></span></button>
</nav>
<div id="filter" className="bg-dark">
<div className="row  justify-content-center mb-4" >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="https://www.dellaadventure.com/uploads/5066chess-inside-img.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title">1 Thriller Factor</h5>
 <h1 className="card-text">CHESS</h1>
 <a href="#" className="btn btn-warning" onClick={chess}>View activity</a>
</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="https://www.dellaadventure.com/uploads/6839carrom-outside-img.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">1 Thriller Factor</h5>
   <h1 className="card-text">CARROM</h1>
   <a href="#" className="btn btn-warning"onClick={carrom}>View activity</a>
 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center  mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="https://www.dellaadventure.com/uploads/250747.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title">1 Thriller Factor</h5>
 <h1 className="card-text">VIRTUAL RACING CARS</h1>
 <a href="#" className="btn btn-warning" onClick={navi1}>View activity</a>
</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="https://www.dellaadventure.com/uploads/160048.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">1 Thriller Factor</h5>
   <h1 className="card-text">VIRTUAL GAMES</h1>
   <a href="#" className="btn btn-warning" onClick={navi10}>View activity</a>
 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center  mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning">
 <img src="https://www.dellaadventure.com/uploads/5980longest-flying-fox-outside-img.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title text-danger">7 Thriller Factor</h5>
 <h1 className="card-text">LONGEST FLYING FOX</h1>
 <a href="#" className="btn btn-warning" onClick={navi2}>View activity</a>
</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="https://www.dellaadventure.com/uploads/2414Circadian%20Cycle1.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title text-danger">7 Thriller Factore</h5>
   <h1 className="card-text">Circadian Cycle</h1>
   <a href="#" className="btn btn-warning" onClick={navi3}>View activity</a>
 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="https://www.dellaadventure.com/uploads/2669rappelling-outside-img.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title text-danger">8 Thriller Factore</h5>
 <h1 className="card-text">RAPPELING</h1>
 <a href="#" className="btn btn-warning" onClick={navi4}>View activity</a>
</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="https://www.dellaadventure.com/uploads/42859365ATV%20200cc.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title btn-warning"> 8 Thriller Factoree</h5>
   <h1 className="card-text">ATV</h1>
   <a href="#" className="btn btn-warning" onClick={navi5}>View activity</a>
 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning">
 <img src="https://www.dellaadventure.com/uploads/8753shooting-range-outside-img.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title">2 thriller factor</h5>
 <h1 className="card-text">SHOOTING RANGE</h1>
 <a href="#" className="btn btn-warning" onClick={navi6}>View activity</a>
</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="https://www.dellaadventure.com/uploads/8604Bungee-trampoline.png" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">2 thriller factor</h5>
   <h1 className="card-text">BUNGEE TRAMPOLINE</h1>
   <a href="#" className="btn btn-warning" onClick={navi7}>View activity</a>
 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center mb-4r " >
<div className="col-sm-12 col-md-9 ">
<div className="row">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="https://www.dellaadventure.com/uploads/8202rocket-ejector-outside-img.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title">2 thriller factor</h5>
 <h1 className="card-text">BUNGEE TRAMPOLINE</h1>
 <a href="#" className="btn btn-warning" onClick={navi8}>View activity</a>
</div>
</div>
<div className="card col-sm-4 col-md-6 card border-warning" >
 <img src="https://www.dellaadventure.com/uploads/4499High%20Rope%20Challenge.JPG" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">Card title</h5>
   <h1 className="card-text">BUNGEE TRAMPOLINE</h1>
   <a href="#" className="btn btn-warning" onClick={navi9}>View activity</a>
 </div>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}

export default NavScrollExample;