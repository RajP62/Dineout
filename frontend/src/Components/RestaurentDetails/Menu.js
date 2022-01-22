import React from "react";
import styles from "./Menu.css";

const Menu = ({ menuImage, menuLength }) => {
  return (
    <div className="MenuRestaurant_Container" id="menu">
      <div className="MenuRestaurant_Head">Menu
      <div className="MenuRestaurant_Img">
        <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/n/k/m58280-162617639160ed7b87c1dad.jpg?tr=tr:n-small" alt="menu Img" />
      </div>
      </div>
      
    </div>
  );
};
export default Menu;