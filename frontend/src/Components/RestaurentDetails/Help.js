import React from "react";
import './Help.css'

export default function Help() {
  return (
    <div id="help">
      <section className="rdp-section rdp-need-help" id="help">
        <h4>We're always here to help</h4>
        <ul className="d-flex">
          <li>
              <div className="d-flex">
                <div className="icon">
                  <img
                    src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png"
                    alt="help"
                    className="clear-img"
                  />
                </div>
                <div className="container-num">
                  <h5>Call Us <p>+91 9212340202</p></h5>
                  
                </div>
              </div>
          </li>
          <li>
            <a href="" className="body-color">
              <div className="d-flex">
                <div className="icon">
                  <img
                    src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png"
                    alt="help"
                    title="help"
                    width="40"
                    className="clear-img"
                  />
                </div>
                <div>
                  <h5>Call the restaurant <p>07337383767</p></h5>
                  
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
