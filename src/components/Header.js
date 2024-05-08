import React from "react";
// import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <header id="home" className="header valign bg-img parallaxie">
      <div className="container header-container">
        <div className="row">
          <div className="col-md-12 text-center caption">
            <h1 className="animate-box" data-animate-effect="fadeInUp">
              Nidhin & Della
            </h1>
            <h5 className="animate-box" data-animate-effect="fadeInUp">
              {/* 23 May, 2024 – Betrothal <br /> */}
              {/* 26 May 2024 */}
              {/* <div id="oliven-aside" className="oliven-logo">
              <img src={Logo} alt="" />
            </div> */}
            </h5>
            {/* <div id="oliven-aside" className="oliven-logo">
              <img src={Logo} alt="" />
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="arrow bounce text-center">
              <a href="#couple">
                {" "}
                <i className="ti-heart"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
