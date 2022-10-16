import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <>
      <div className="Footer_outer">
      <div className="Footer_inner">
        <table>
          <tr>
            {["Available in"].map((item) => (
              <th>
                {item}
                <h4></h4>
              </th>
            ))}
          </tr>

          <tr>
            {["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"].map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            {["Pune", "Kolkata", "Ahmedabad", "Chandigarh", "Goa"].map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            {["Jaipur", "Lucknow", "Indore", "Udaipur", "Agra"].map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            {["Vadodara", "Nagpur", "Kochi", "Surat", "Ludiana"].map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
        </table>
      </div>
      <div>
        <hr />
      </div>
      <div className="Footer_inner">
        <table>
          <tr>
            {[
              "Discover",
              "About",
              "Top Cuisines",
              "Top Facilities",
              "Top Locations"
            ].map((item) => (
              <th>
                {item}
                <h4></h4>
              </th>
            ))}
          </tr>

          <tr>
            {[
              "Trending Restaurants",
              "About us",
              "Chinese",
              "Romantic",
              "Koramangala"
            ].map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {[
              "Super Savers",
              "Blog",
              "Italian",
              "Fine Dining",
              "Indiranagar"
            ].map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {[
              "Dineout Pay",
              "Add Restaurant",
              "North Indian",
              "Fine Dining",
              "Jayanagar"
            ].map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {[
              "Dineout Passport",
              "Terms and conditions",
              "Kerala",
              "5 star",
              "White Field"
            ].map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {[
              "Contactless Dining",
              "Privacy and Policy",
              "Bengali",
              "Pure Veg",
              "Marathahalli"
            ].map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {[" ", " ", "Thai", "Sea Food", "HSR Layout"].map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        </table>
      </div>
      <div>
        <hr />
      </div>
      <div className="Footer_inner">
        <div className="Footer_box">
          <div style={{ margin: "auto", width: "fit-content" }}>
            <img
              style={{ width: "130px" }}
              src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
              alt="logo"
            />
          </div>
          <div
            style={{ fontSize: "12px", textAlign: "center", color: "gray ", marginBottom: "10px" }}
          >
            Find the best Restaurants, Deals, Discounts & Offers
          </div>

          <div
            style={{ fontSize: "15px", textAlign: "center", color: "gray" }}
          >
            Contact: <b>+91-9212340202</b>
          </div>
          <div
            style={{
              width: "fit-content",
              margin: "auto",
              marginTop: "10px"
            }}
          >
            {[
              "https://www.svgrepo.com/show/134513/youtube.svg",
              "https://www.svgrepo.com/show/120931/facebook.svg",
              "https://www.svgrepo.com/show/331440/instagram.svg",
              "https://www.svgrepo.com/show/126780/twitter.svg"
            ].map((item) => (

              <img
                style={{ height: "30px", width: "30px", marginRight: "10px" }}
                src={item}
                alt="imm"
              />
            ))}
          </div>
          <p style={{ color: "gray", fontSize: "12px", textAlign: "center" }}>
            <b>&copy; 2017, dineout.co.in. All Rights Reserved.</b>
          </p>
        </div>
      </div>
      <hr />
    </div>
    </>
  );
};
export default Footer;
