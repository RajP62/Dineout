import React from "react";
import './AboutRestaurant.css';


export default function AboutRestaurant({product}) {
  return (
    <div>
      <section id="about">
        <div className="rdp-section rdp-about-wrap">
          <h3 className="cursor">About</h3>
          <div>
            <p>
              <span className="more" id="w1-6[0]"></span>
            </p>
            <div className="about-info d-flex">
              <div className="icon">
                <img
                  className=""
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_30.png"
                />
              </div>
              <div>
                <h4>CUISINE</h4>
                <a href="/mumbai-restaurants/powai/chandivali/north-indian-cuisine">
                  North Indian
                </a>
                <a href="/mumbai-restaurants/powai/chandivali/chinese-cuisine">
                  {" "}
                  Chinese
                </a>
                <a href="/mumbai-restaurants/powai/chandivali/barbecue-cuisine">
                  {" "}
                  Barbecue
                </a>
              </div>
            </div>
            <div className="about-info">
            <div className="icon">
                <img
                  className=""
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_5.png"
                />
              </div>
              <div>
                <h4>CUISINE</h4>
                <a href="/mumbai-restaurants/powai/chandivali/north-indian-cuisine">
                  North Indian
                </a>
                <a href="/mumbai-restaurants/powai/chandivali/chinese-cuisine">
                  {" "}
                  Chinese
                </a>
                <a href="/mumbai-restaurants/powai/chandivali/barbecue-cuisine">
                  {" "}
                  Barbecue
                </a>
              </div>
            </div>
            <div className="about-info ">
             <div className="icon">
                <img
                  className=""
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/grouprupee.png"
                />
              </div>

              <div>
                <h4>CUISINE</h4>
                <a href="/mumbai-restaurants/powai/chandivali/north-indian-cuisine">
                  North Indian
                </a>
                <a href="/mumbai-restaurants/powai/chandivali/chinese-cuisine">
                  {" "}
                  Chinese
                </a>
                <a href="/mumbai-restaurants/powai/chandivali/barbecue-cuisine">
                  {" "}
                  Barbecue
                </a>
              </div>
            </div>
            <div className="about-info ">
              <div className="icon">
                <img
                  className=""
                  data-src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_2.png"
                  src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_2.png"
                />
              </div>
              <div>
                <h4>FACILITIES &amp; FEATURES</h4>
                <ul className=" facilities">
                  <li>
                    <img
                      className=""
                      data-src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/7.png"
                      src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/7.png"
                    />
                    <a href="/mumbai-restaurants/powai/chandivali/air-conditioned-feature">
                      Air Conditioned
                    </a>
                  </li>
                  <li>
                    <img
                      className=""
                      data-src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/11.png"
                      src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/11.png"
                    />
                    <a href="/mumbai-restaurants/powai/chandivali/parking-feature">
                      Parking
                    </a>
                  </li>
                  <li>
                    <img
                      className=""
                      data-src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/13.png"
                      src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/13.png"
                    />
                    <a href="/mumbai-restaurants/powai/chandivali/cards-accepted-feature">
                      Cards Accepted
                    </a>
                  </li>
                  <li>
                    <img
                      className=""
                      data-src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/26.png"
                      src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/26.png"
                    />
                    <a href="/mumbai-restaurants/powai/chandivali/barbeque-and-grill-feature">
                      Barbeque and Grill
                    </a>
                  </li>
                  <li>
                    <img
                      className=""
                      data-src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/2.png"
                      src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/2.png"
                    />
                    <a href="/mumbai-restaurants/powai/chandivali/wallet-accepted-feature">
                      Wallet Accepted
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
