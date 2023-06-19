import "bootstrap/dist/css/bootstrap.css";
import "./Aboutus.css";
function Aboutus() {
  return (
    <>
      <div
        className="row d-flex justify-content-center bg-dark m-0"
        style={{ width: "100wh" }}
      >
        <div className="col-sm-12 col-md-9" style={{ color: "white" }}>
          <h1 className="About">ABOUT US</h1>
        </div>
      </div>
      <div className="bg-dark">
      <div className="container bg-primary" style={{ height: "40vh" }}>
        <div className="row">
          <div className="col">
            {" "}
            <img
              src="assests/images/divyam.jpeg"
              className="img-thumbnail"
              alt="..."
              style={{ width: "50%", height: "80%", margin: "2px" }}
            />
            <h3 style={{ color: "white" }}>Divyam Sahu</h3>
          </div>
          <div className="col">
            {" "}
            <img
              src="assests/images/abhang.jpg"
              className="img-thumbnail"
              alt="..."
              style={{ width: "50%", height: "80%" }}
            />
            <h3 style={{ color: "white" }}>Abhang Mundhe</h3>
          </div>
          <div className="col">
            {" "}
            <img
              src="assests/images/vasim.jpeg"
              className="img-thumbnail"
              alt="..."
              style={{ width: "50%", height: "80%" }}
            />
           <h3 style={{ color: "white" }}>Vasim Kurane</h3>
          </div>
        </div>
      </div>
      <div className="alert alert-warning" role="alert" >
        <h4 className="alert-heading para">Hello!!</h4>
        <p className="para">
          Apex Adventure is Asia’s largest adventure program that introduces
          participants to the world of adventure sports. The program provides
          exposure to multiple elements of adventure and outdoor activities in a
          safe and controlled environment. Such experiences transform the
          participants and develop their confidence, willpower, focus and
          leadership. The program also promotes the habit of an active lifestyle
          and brings the participants closer to nature. With a mission of being
          accessible to masses, the program has already impacted over a million
          lives. For its innovative activities and training techniques, Apex
          Adventure Programs became the first in India to win the Education
          Excellence Award for “Best Adventure Education” in 2012. In 2015, the
          Programs were awarded the “Best Physical Education Programme” at the
          Indian Education Congress. Apex Adventure programs also received the
          “Excellence in Outdoor Education” award at Adventure Sports Expo Asia
          2018.
        </p>
        <hr />
        <p className="mb-0">
         THANK YOU!!
        </p>
      </div>
      </div>
    </>
  );
}
export default Aboutus;
