import React from "react";
import './AccountDetails.css';
import PreviousOrder from './PreviousOrder'

const AccountDetails = () => {
  return (
    <div className="AccountDetails_page">
      <div className="row my_acc">
        <div className="container">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div id="diner_img" className="dp_img">
              <img
                className="dp_img"
                src="https://im1.dineout.co.in/images/uploads/misc/2017/Jan/3/no-image.png"
                width="150"
                height="150"
                alt="User Image"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="row font24 pd_bot5">
              <span className="pull-left">Vijay </span>
              <a
                href=""
                className="pull-left"
                data-w-onclick="showEditProfileBox|w1-w0"
              >
                <span className="edit_icon"></span>
              </a>
            </div>
            <div className="row font16 pd_bot5">
              <div className="pull-left">
                <span className="icon_box mrgn_right5">
                  <span className="phone_icon"></span><i class="fas fa-phone-alt"></i>
                </span>{" "}
                +919082027900
              </div>
              <div className="edit pull-left">
                <a
                  href=""
                >
                  Edit
                </a>
              </div>
            </div>
            <div className="row font16 pd_bot5">
              <div className="pull-left">
                <span className="icon_box mrgn_right5">
                  <span className="mail_icon"><i class="fas fa-envelope"></i></span>
                </span>{" "}
              </div>
              <div className="edit pull-left">
                <a
                  href=""
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 txt_rght">
            <div className="clearfix pd_top10">
              <div className="font16 clearfix">
                Total Dined <span className="dflt_color my_count">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreviousOrder />
      </div>
  );
};
export default AccountDetails;