import React from 'react';
import RestraurantDetail from "./RestraurantDetail";
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
import './ResDetails.css';
import ContactCont from "./ContactCont";

export default function ResDetails() {
  return (
  <div className="Whole-body-container">

  <div className="res-detail-body">
       <RestraurantDetail />
      <OverView />
      
              <NewOffers />
              <DinePage />
              <Menu />
              <AboutRestaurant />
              <YouMayLike />
              <Help />

  </div>
  
  <div className="cont-body-details">
    <ContactCont />
  </div>
  
</div>
  )
}
