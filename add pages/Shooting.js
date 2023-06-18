import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Shooting.css";
function Shooting() {
  const navigate = useNavigate();

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
                      Restaurant
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shoping
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
          <h3>Shooting Range</h3>
          <p>
            When you stare down the barrel of a gun, what matters is which side
            you are on. Live the excitement of shooting an open sight air rifle
            in a competition setting and feel your breath as you squeeze the
            trigger at Della Shooting range. This activity involves shooting
            over a distance of 10 meters from a standing position with a 4.5 mm
            caliber air rifle with a maximum weight of 5.5 kg. Test your skills
            as you compete with a group of friends or colleagues at the shooting
            range.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 img-div">
          <img
            src="assests/images/Shooting.jpg"
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
          <h6>Kids Friendly</h6>
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

export default Shooting;
