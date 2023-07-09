import "bootstrap/dist/css/bootstrap.css";

function Register() {
  return (
    <>
    <div>
      <form >
        <div className="input">
          
            <label>username</label>
            <input
              placeholder="username"
              className="form-control form-control-lg"
            ></input>
          </div>
        
        <div className="row  d-flex justify-content-center align-item-center">
          
            <label>username</label>
            <input
              placeholder="surname"
              className="form-control form-control-lg"
            ></input>
          </div>
        

        <div className="input">
          
            <label>username</label>
            <input
              placeholder="Mobile no"
              className="form-control form-control-lg"
            ></input>
          </div>
        

        <div className="input">
          
            <label>username</label>
            <input
              placeholder="Mobile no"
              className="form-control form-control-lg"
            ></input>{" "}
            
            <label>username</label>
            <input
              placeholder="email"
              className="form-control form-control-lg"
            ></input>
          </div>
        
      </form>
      </div>
    </>
  );
}

export default Register;
