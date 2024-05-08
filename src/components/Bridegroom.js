import React from "react";
import della from "../assets/images/della.jpg";
import nidhin from "../assets/images/nidhin1.jpg";
function Bridegroom() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item toright mb-30 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img">
                {" "}
                <img src={della} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Della Dominic <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>The Bride</span>
                  <p>
                    Daughter of Mrs. Mini Dominic & Mr. Dominic K C,
Kottaram House, Palluruthy.
                  </p>
                  {/* <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-twitter"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-instagram"></i>{" "}
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="item mb-30 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                {" "}
                <img src={nidhin} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Nidhin Joy <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>The Groom</span>
                  <p>
                    Son of Mrs. Cicily Joy & Mr. Joy Mathew,
Pulickal House, Angamaly.
                  </p>
                  {/* <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-twitter"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-instagram"></i>{" "}
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">We are getting Married!</h3>
            <h4 className="oliven-couple-subtitle">
              26 May 2023 — St.George Basilica Church, Angamaly
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
