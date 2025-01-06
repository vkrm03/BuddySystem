import React from "react";
import "../../styles/HomeContent.css";
import "../../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
    <div className="home-content" style={{ marginTop: "30px" }}>
      <div className="content-container">
        <div className="w3-container w3-content w3-center w3-padding-64" id="band">
          <h2 className="w3-wide" style={{ fontSize: "30px" }}>
            SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY
          </h2>
          <p className="w3-opacity" style={{ marginTop: "70px" }}>
            <i>DEPARTMENT OF INFORMATION TECHNOLOGY</i>
          </p>
          <p className="w3-justify" style={{ marginTop: "70px", fontSize: "18px" }}>
            "We're thrilled to have you join our dynamic and innovative community. Here, you'll embark on a journey of exploration, learning, and collaboration in the ever-evolving world of technology. Whether you're a seasoned professional or just beginning your IT adventure, you'll find endless opportunities to grow, excel, and make a meaningful impact. Together, let's push boundaries, harness the power of technology, and pave the way for a brighter future."
          </p>
        </div>
        <footer className="link-icons">
          <a href="https://www.facebook.com/SathyabamaOfficial/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
          </a>
          <a href="https://www.instagram.com/sathyabama.official/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram w3-hover-opacity"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCkBMqT83pxjwPhh8mUpZ0hQ" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube w3-hover-opacity"></i>
          </a>
          <a href="https://x.com/sathyabamauniv?lang=en" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter w3-hover-opacity"></i>
          </a>
          <a href="https://www.linkedin.com/school/sathyabama-institute-of-science-&-technology-chennai/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </a>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default Home;
