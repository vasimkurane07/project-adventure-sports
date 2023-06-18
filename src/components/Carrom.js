import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Carrom.css";
function Carrom() {
    const navigate = useNavigate();
    let goto=()=>{
        navigate("/Chess")
    }
  return (
    <>
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
                  onClick={goto}
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
      <div className="row justify-content-center w-100 m-0">
        <div className="col-sm-12 col-md-6 alert alert-warning p-3 m-0">
          <h3>Carrom</h3>
          <p>
            The familiar crack of the striker on coins, guffawing laughter and
            family. Ring a bell; Yes!! it's carom the household game that all
            members of the family can enjoy. Bring yours too, to take a break
            from all the adrenaline pumping adrenaline rushing activities and
            play a quick board. The objective of play is to use a striker disk
            to move lighter object disks called carrom men, into one of four
            corner pockets. Your aim should be to pocket your opponents nine
            carrom men and the Queen before your opponent.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 img-div">
          <img
            src="assests/images/carrom.jpg"
            className="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <div
        className="row justify-content-center w-100 m-0"
        style={{ padding: "12px" }}
      >
        <div className="col-sm-12 col-md-12 alert alert-warning p-3 m-0 pass-div">
          <h5 style={{ flex: "1" }}>ACTIVITY AVAILABLE IN:</h5>
          <h6>Jumbo pass</h6>
          <h6>Day pass</h6>
        </div>
      </div>
      <div
        className="row justify-content-center w-100 m-0"
        style={{ padding: "12px" }}
      >
        <div className="col-sm-12 col-md-12 alert alert-warning p-3 m-0 bg-dark">
          <h4>Safety Measures</h4>
          <h5 style={{ color: "white" }}>NA</h5>
        </div>
      </div>
    </>
  );
}

export default Carrom;
