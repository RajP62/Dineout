import React, { useState, useEffect } from "react";
import "./RestraurantDetail.css";
import DinePage from "./DinePage";
import Menu from "./Menu";
// import SimpleImageSlider from "react-simple-image-slider";
import AboutRestaurant from "./AboutRestaurant";
import OverView from "./OverView";
import NewOffers from "./NewOffers";
import TopHead from "./TopHead";
import YouMayLike from "./YouMayLike";
import Help from "./Help";
import { useParams } from "react-router";
// import axios from "axios";
import TimeSlots from "../Timeslot";
import { useContext } from "react";
import { ClickedContext } from "../../Context/clickedItem";

export const RestraurantDetail = () => {
  const {clickedId} = useContext(ClickedContext);
  console.log(clickedId)

  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch(
      `https://backend-dineout.herokuapp.com/restaurants/id/${clickedId}`,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data)

    setProduct(data.data);
  };
  useEffect(() => {
    getProduct();
  }, [setProduct]);

  /*  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const res = await fetch(
        'https://backend-dineout.herokuapp.com/restaurants/id/61ea6739c152d2daf1462c19',
      );
      const json = await res.json();
      setProduct(json);
    
      setIsLoading(false);
    };
    fetchProduct();
  }, [setProduct]);

  console.log(product)*/

  // console.log(product.about[0].cuisine[0].name)

  const { title, about,state, place, district, imagePrimary, altImages } = product;
  // console.log(altImages[0])

  //   const images = [
  //     { url: imagePrimary },

  //   ];

  //   const testImages = [imagePrimary,...altImages];
  //   console.log(testImages);
  // for(var i = 0; i < about.cuisine.length; i++) {
  //   var cuis = about.cuisine[i];
  //   console.log(cuis)
  // }

  return (
    <div className="container-whole">
      <div className="contentCntr">
        {/* <TopHead /> */}



        {/* <div>
            <div className="container">
        <ul className="breadcrumbs">
          <li>
            <a href="/" itemprop="item">
              <span itemprop="name">dineout</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i>
          </li>
          <li>
            <a href="/mumbai-restaurants" itemprop="item">
              <span itemprop="name">{state}</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i> 
          </li>
          <li>
            <a href="/mumbai-restaurants/navi-mumbai" itemprop="item">
              <span itemprop="name">{district}</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i>
          </li>{" "}
          <li>
            <a href="/mumbai-restaurants/navi-mumbai/rabale" itemprop="item">
              <span itemprop="name">{place}</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i>
          </li>{" "}
          <li className="active">{title}</li>
        </ul>
      </div>
      <br></br>
        </div> */}









    
        <div className="content marginT0">
          <div className="detailDiv">
            <div className="rdp-banner restnt-pics-slider">
              <div className="pics-slider slider demo-gallery slick-initialized slick-slider" >
                <div className="slick-list draggable" >
                  <div className="slick-track" >
                    {/* <SimpleImageSlider
                      width="64%"
                      height={440}
                      images={"images"}
                      showNavs={true}
                    /> */}

                    <img src={imagePrimary} />
                  </div>
                </div>
              </div>

              <section className="rdp-section restnt-details d-flex">
                <div className="restnt-details_info">
                  <h1>{title}</h1>
                  <div className="restnt-cost">
                    <a
                      href="/mumbai-restaurants/navi-mumbai/rabale/continental-cuisine"
                      className="text-ltgrey"
                    >
                      {product.avgcost} |{" "}
                   
                    </a>
                    <a
                      href="/mumbai-restaurants/navi-mumbai/rabale/mexican-cuisine"
                      className="text-ltgrey"
                    >
                      {/* {product.about.cuisine[1].name} */}
                    </a>
                    <a
                      href="/mumbai-restaurants/navi-mumbai/rabale/american-cuisine"
                      className="text-ltgrey"
                    >
                      {/* {product.about.cuisine[2].name} */}
                    </a>
                  </div>
                  <div className="restnt-name">
                    <a
                      href="/mumbai-restaurants/navi-mumbai/rabale"
                      className="text-ltgrey"
                    >
                      {place}|{" "}
                    </a>
                    <a href="/mumbai-restaurants" className="text-ltgrey">
                      {district} |{" "}
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
                    <a href="" className="dropdown-toggle" id="dropdownMenu1">
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
            </div>

            {/*   form   */}
          </div>
        </div>
      </div>
    </div>
  );
};
