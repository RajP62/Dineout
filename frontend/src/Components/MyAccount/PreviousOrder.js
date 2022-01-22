import React from "react";
import "./PreviousOrder.css";

function PreviousOrder() {
  return (
    <div className="PreviousOrder-page">
      <div className="flex-container">
        <div className="flex-child magenta">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="acc_blocks add" id="w1-history-booking">
              <ul className="day-shift-tabs" role="tablist">
                <li
                  className="active"
                >
                  <a href="#PreviousReservation">
                    <span>Previous Reservations</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade in active"
                >
                  <div className="time-list-wrap">
                    <div className="scrollBox-h">
                      <div className="full-w-h" id="w1-history-booking-item[0]">
                        <div className="booking-cardBox cursor" >
                          <div
                            className="booking-card-wrap"
                            onclick="location.href = '/booking-success/14193830'"
                          >
                            <div className="clearfix">
                              <div className="img-wrap">
                                <img
                                  src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/f/o/p58280-16002482485f61d9b800bbd-80x80-ido9174f04742b25.jpg"
                                />
                                <div className="status cancelled">Cancelled</div>
                              </div>
                              <div className="right">
                                <h3 className="restnt-name">
                                  ABs - Absolute Barbecues
                                </h3>
                                <div className="loc-wrap">
                                  Chandivali, Mumbai
                                  <div className="marginT5">
                                    24th January 2022, 11:30 am, Breakfast
                                  </div>
                                </div>
                                <div className="details">
                                  <div className="col">
                                    Diners <span>2</span>
                                  </div>
                                  <div className="col">
                                    Booking ID <span>DO14194830</span>
                                  </div>
                                  <div className="col selected-offer">
                                    Selected Offer{" "}
                                    <span className="ellipsis">No offer</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="arrow">
                              <i className="do do-angle-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="full-w-h" id="w1-history-booking-item[1]">
                        <div className="booking-cardBox cursor" data-bid="14184448">
                          <div
                            className="booking-card-wrap"
                            onclick="location.href = '/booking-success/14184448'"
                          >
                            <div className="clearfix">
                              <div className="img-wrap">
                                <img
                                  src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/j/j/p1001-15156546345a570deaa60f6-80x80-ido59d13d3ce5fc0.jpg"
                                  width=""
                                  alt="Dineout"
                                  title="Dineout"
                                />
                                <div className="status cancelled">Cancelled</div>
                              </div>
                              <div className="right">
                                <h3 className="restnt-name">Dusk</h3>
                                <div className="loc-wrap">
                                  CBD-Belapur, Mumbai
                                  <div className="marginT5">
                                    Tomorrow, 06:15 pm, Dinner
                                  </div>
                                </div>
                                <div className="details">
                                  <div className="col">
                                    Diners <span>1</span>
                                  </div>
                                  <div className="col">
                                    Booking ID <span>DO14185448</span>
                                  </div>
                                  <div className="col selected-offer">
                                    Selected Offer{" "}
                                    <span className="ellipsis">No offer</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="arrow">
                              <i className="do do-angle-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-child green">
          <div className="float-cont">
            <div className="float-child green">
              <div className="acc_blocks" id="w1-savings-card">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <h2>Total Savings</h2>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 svngs">
                    <span className="rs_ico_lrg"></span>
                    <i className="icon-rupee"></i>0
                  </div>
                </div>
                <p className="font12 pd_top10">
                  *This is an approximate amount based on your total no of
                  bookings and discounts applicable on the restaurant.
                </p>
              </div>
            </div>

            <div className="float-child blue">
              <div class="acc_blocks">
                <div class="row pd_bot10">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <h2>
                      <span class="wallet_icon_black pull-left mrgn_right10">
                        <i class="fas fa-wallet"></i>
                      </span>
                      Dineout Pay
                    </h2>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 svngs"></div>
                </div>
                <div class="row wallet_row">
                  <div class="col-lg-12 col-md-12 col-sm-12 pd_left0 font12">
                    Download the Dineout App and pay the restaurant bill through
                    Dineout Pay to earn 20% Cashback (upto ₹ 250). Download the
                    app here{" "}
                    <a href="" target="_blank" rel="noopener">
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviousOrder;
