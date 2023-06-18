import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./RocketEjector.css";
function RocketEjector() {
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
          <h3>Rocket Ejector </h3>
          <p>
            Come and experience euphoria with our very own Rocket Ejector –
            India's highest Rocket Ejector – which catapults you four and a half
            floors high up into the sky. You will be strapped to the seat with 5
            -point safety belts.The high tension elastic rope catapult will
            shoot you up, and gravity will pull you back down. In a few
            thrilling moments, this bouncing decreases and the pulse stabilizes.
            Rocket Ejector gives you the opportunity to experience an extreme
            sport whilst having fun, your safety guaranteed with the highest
            standards of quality-controlled equipment as well as trained
            professionals standing by – so you can very well leave your
            inhibitions at the ground and soar high into the sky!!.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 img-div">
          <img
            src="assests/images/RocketEjector.jpg"
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

export default RocketEjector;
