import React from "react";
import './Overview.css'

function OffersView() {
  return (
    <div className="rdp-section9 pd-0">
      <ul
        className="d-flex flex-row rdp-detailmenu"
        id="rdpsub-header"
      >
        <li>
          <a href="#info">
            Overview
          </a>
        </li>
        <li>
          <a
            href="#offers"
            className=""
          >
            Offers (13)
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className=""
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="cursor"
          >
            About
          </a>
        </li>
       
        <li>
          <a
            href="#help"
            className=""
          >
            Help
          </a>
        </li>
      </ul>
    </div>
  );
}
export default OffersView;