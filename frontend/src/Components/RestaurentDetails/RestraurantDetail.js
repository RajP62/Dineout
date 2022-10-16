import React, { useState, useEffect } from "react"
import "./RestraurantDetail.css";


import Grid from '@mui/material/Grid';
// import DinePage from "./DinePage";
// import Menu from "./Menu";

// import AboutRestaurant from "./AboutRestaurant";
// import OverView from "./OverView";
// import NewOffers from "./NewOffers";
// import TopHead from "./TopHead";
// import YouMayLike from "./YouMayLike";
// import Help from "./Help";
import { useParams } from "react-router";

// import TimeSlots from "../Timeslot";
import { useContext } from "react";
import { ClickedContext } from "../../Context/clickedItem";
import ImageSlider from "../ImageSlider";


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANTDETAILS } from "../../Store/actiontype/auth.action.type";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,


  textAlign: 'center',
  color: theme.palette.text.secondary,
}));







export const RestraurantDetail = () => {

  const {clickedId} = useContext(ClickedContext);
    console.log(clickedId,"id")
  
    const [product, setProduct] = useState([]);
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:4000/restaurants/id/${clickedId}`,
        { mode: "cors" }
      );
      const data = await response.json();
      console.log(data,"response")
  
      setProduct(data.data);
      dispatch({type:RESTAURANTDETAILS,payload:{name:data.data.title,adress:`${data.data.place}-${data.data.district}`, price: data.data.avgcost.trim().split(" ")[0]}})
    };
    useEffect(() => {
      getProduct();
    }, []);
  
  
  
    console.log(product)
  
 let {restaurantDetails} = useSelector((state)=>state)
  
   var { title, about,state, place, district, imagePrimary, altImages } = product;
      
    let dispatch = useDispatch()


console.log(restaurantDetails,"restaurant")

  return (

<Grid  container width={800} columns={1} gridTemplateRows={2} spacing={2}>
  <Grid item xs={6} md={8}>
    <Item  >

    <ImageSlider data = {altImages}></ImageSlider>
    </Item>
    <Item>

      
              <section className="rdp-section restnt-details d-flex">
                <div className="restnt-details_info">
                  <h1>{title}</h1>
                  <div className="restnt-cost">
                    <a
                      href="/mumbai-restaurants/navi-mumbai/rabale/continental-cuisine"
                      className="text-ltgrey"               >
                      {product.avgcost} |{" "}
                   
                    </a>                     <a
                      href="/mumbai-restaurants/navi-mumbai/rabale/mexican-cuisine"
                     className="text-ltgrey"                    >
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
                      <span className="text-blue font-bold"> (Open Now)</span>
                      <i className="do do-angle-down"></i>
                      <div className="opening-hrs-wrap">
                        <div className="time-wrap">
                          <div className="all-timings">
                            <div
                              className="tooltip bottom"
                              role="menu"
                              aria-labelledby="dropdownMenu1"
                            >
                              <div className="tooltip-arrow"></div>
                              <div className="tooltip-inner"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="rdp-restnt-rating">
                  <div
                    scroll-hash="#review-section"
                    data-w-onclick="scrollToHash|w1"
                  >                     <div className="cursor rest-rating rating-5">4.6</div>
                  </div>                 </div>
              </section>
    </Item>
  </Grid>
 
 
 
</Grid>

  )
}