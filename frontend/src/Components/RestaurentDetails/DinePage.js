import React from "react";
import styles from "./DinePage.css";

const DinePage = () => {
  return (
    <div className="DineOutPayCard_Container">
      <div className="DineOutPayCard_IMG">
        <img
          src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/gp-logo.png?tr=tr:n-medium"
          alt="dineout pay"
        />
      </div>
      <div className={styles.DineOutPayCard_info}>
        Combine any offer with Dineout Pay to <strong>save up to 10% </strong>{" "}<br></br>
        more on your bill and also get <strong> 20%</strong> cashback.
      </div>
    </div>
  );
};
export default DinePage;