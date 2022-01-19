import React from "react";
import "./RestraurantDetail.css";
import DinePage from "./DinePage";
import Menu from "./Menu";
import SimpleImageSlider from "react-simple-image-slider";
import AboutRestaurant from './AboutRestaurant';
import OverView from './OverView';
import NewOffers from './NewOffers';
import TopHead from './TopHead';

const images = [
  { url: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/f/o/p58280-16002482485f61d9b800bbd.jpg' },
  { url: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/l/y/p58280-15602298495cff37d95e7ef.jpg?tr=tr:n-small' },
  { url: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/d/b/p58280-15602298565cff37e0e42ed.jpg?tr=tr:n-small' },
];


const RestraurantDetail = () => {
  return (
    <div className="contentCntr">
      <TopHead />
      <div className="content marginT0">
        <div className="detailDiv">
          <div className="rdp-banner restnt-pics-slider">
            <div className="pics-slider slider demo-gallery slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track">
                <SimpleImageSlider
        width={836}
        height={454}
        images={images}
        showNavs={true}
      />
                </div>
              </div>
            </div>

            <section className="rdp-section restnt-details d-flex">
              <div className="restnt-details_info">
                <h1>Pot Pourri by Monarch</h1>
                <div className="restnt-cost">
                  ₹ 1,500 for 2 |{" "}
                  <a
                    href="/mumbai-restaurants/navi-mumbai/rabale/continental-cuisine"
                    className="text-ltgrey"
                  >
                    Continental
                  </a>
                  <a
                    href="/mumbai-restaurants/navi-mumbai/rabale/mexican-cuisine"
                    className="text-ltgrey"
                  >
                    Mexican
                  </a>
                  <a
                    href="/mumbai-restaurants/navi-mumbai/rabale/american-cuisine"
                    className="text-ltgrey"
                  >
                    American
                  </a>
                </div>
                <div className="restnt-name">
                  <a
                    href="/mumbai-restaurants/navi-mumbai/rabale"
                    className="text-ltgrey"
                  >
                    Rabale |{" "}
                  </a>
                  <a href="/mumbai-restaurants" className="text-ltgrey">
                    Mumbai |{" "}
                  </a>
                  <a
                    href=""
                    className="text-blue font-bold"
                    item-clicked="direction"
                    data-w-onclick="restroNavClicked|w1"
                  >
                    <img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/path.png" />{" "}
                    Get Direction
                  </a>
                </div>
                <div className="timing">
                  Time: 12:00 PM to 12:00 AM
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    data-action="rdp-timings"
                    aria-expanded="true"
                    data-w-onclick="restroGAEvents|w1"
                  >
                    <span class="text-blue font-bold"> (Open Now)</span>
                    <i class="do do-angle-down"></i>
                    <div class="opening-hrs-wrap">
                      <div class="time-wrap">
                        <div class="all-timings">
                          <div
                            class="tooltip bottom"
                            role="menu"
                            aria-labelledby="dropdownMenu1"
                          >
                            <div class="tooltip-arrow"></div>
                            <div class="tooltip-inner"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="rdp-restnt-rating">
                <div
                  scroll-hash="#review-section"
                  data-w-onclick="scrollToHash|w1"
                >
                  <div class="cursor rest-rating rating-5">4.6</div>
                </div>
              </div>
            </section>
            <OverView />
            <NewOffers />
            <DinePage />
          <Menu />
          <AboutRestaurant />
   
          </div>
          
         

          {/*   form   */}

          <div className="sidebar-book-section"></div>
        </div>
      </div>
    </div>
  );
};
export default RestraurantDetail;
