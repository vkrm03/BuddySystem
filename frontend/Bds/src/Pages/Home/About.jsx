import React from "react";
import "../../styles/Home.css";


const About = () => {
  return (
    <>
    <div className="home">
      <div className="whole-content main-cont">
        <div className="w3-content content-container" style={{ marginTop: "50px" }}>
          <div className="w3-container w3-content w3-center w3-padding-64" id="band">
            <h2 className="w3-wide" style={{ fontSize: "30px" }}>About Buddy System</h2>
            <p className="w3-justify" style={{ marginTop: "70px", fontSize: "16px" }}>
              Welcome to the Buddy System Project at the Sathyabama Institute of Science and Technology, Dept of Information Technology.
              In our Department of Information Technology, our team—comprising <strong>Nuha Zahra Fathima, Vikram, Vivek</strong>—
              collaborated on the Buddy System project. This initiative aimed to foster peer-to-peer learning and support among students,
              enhancing academic performance and social integration. Each team member brought unique skills and perspectives, contributing
              to the project's success through effective teamwork and innovative problem-solving. Our collective efforts resulted in a 
              comprehensive system that pairs students based on complementary strengths, promoting a collaborative learning environment and
              ensuring all participants benefit from shared knowledge and experience.
            </p>
            <h2 className="w3-wide" style={{ fontSize: "30px" }}>Our Mission</h2>
            <p className="w3-justify" style={{ marginTop: "70px", fontSize: "16px" }}>
              The Buddy System Project is designed to connect students with experienced mentors who can provide guidance, support, and
              inspiration. Our mission is to foster a nurturing environment where students can develop their technical skills, enhance their
              academic knowledge, and build strong professional networks.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
