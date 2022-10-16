import * as React from "react";
import { OutlinedInput, Input, FormControl, Select, InputBase, InputLabel , MenuItem, TextField, FormLabel, Button, Dialog} from '@mui/material';
import { Box } from "@mui/system";
import RestaurantCss from "./RestaurantDashboard.module.css";
import styled from "styled-components";
import Model from "react-modal";

const Style = styled.div`
  min-height: 532px;

  
  width: 464px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px gray;
  margin: auto;
  padding: 40px;
  padding-top: 15px;
 
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #333333;
  }
  .inputBox {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 12px;
      
      color: #333333;
      text-align:left;
      margin:0;

    }
    div {
      height: 40px;
      display: flex;
      align-items: center;
      border: 1px solid #3595FF;
      input {
        width: 100%;
        border: none;
        padding: 5px;
      }
      input:focus {
        outline: none !important;
      }
    }
  }
  .signup_button {
    height: 46px;
    width: 100%;
    border-radius: 4px;
    padding: 12px, 32px, 12px, 32px;
    background: #ff645a;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    line-height: 22px;
    color: white;
    margin-top: 30px;
  }
  .signup_button:hover{
    background: #DC4F4A;
  }
  .lines {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    span {
      width: 130px;
      height: 0px;
      background: #333333;
      border: 1px solid #333333;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .oath_links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .gmail {
      height: 40px;
      width: 176px;
      border-radius: 4px;
      background: #ffffff;
      border: 1px solid #797979;
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        margin-left: 10px;
      }
      p {
        font-size: 14px;
        line-height: 16px;
        color: #797979;
      }
    }
    .facebook {
      height: 40px;
      width: 176px;
      border-radius: 4px;
      background: #0b5b8f;
      border: none;
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        margin-left: 15px;
      }
      p {
        font-size: 14px;
        line-height: 16px;
        color: white;
      }
    }
  }
  .end_line {
    margin-top: 30px;
    p {
      font-size: 14px;
      line-height: 20px;
      color: #333333;
    }
    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #ff645a;
      cursor: pointer;
    }
  }
  .top_cross {
    position: relative;
    left: 380px;
    cursor: pointer;
    width:24px;
    height:24px;
    border-radius:20px;
    display: flex;
    justify-content:center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.03)
  }
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0px",
    marginRight: "-50%",
    overflow: 'scroll',
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(5, 5, 5, 0.3)",
  },
};
Model.setAppElement("#root");

const initForm={
    title:"",
    state:"",
    district:"",
    place:"",
    contact:"",
    fssai:"",
    featured:false,
    avgcost:"",
        cuisine:new Set(),
        type: new Set(),
        bestselling: new Set(),
        facilities: new Set(),
        quickFilters: new Set(),
        openAt:null,
        closeAt:null
    
}
export default function(){
    const [form, setForm] = React.useState(initForm);
    const [isOpen, setIsOpen] = React.useState(false);
    const {title, state, district, contact, fssai, averageCost, cuisine, type, bestSelling, facilities, tags} = form;
  const handleChange = (e) => {
    const {target:{value, name}} = e;
        setForm({
            ...form,
            [name] : new Set([...form[name], value])
        });
  };    
console.log(form);
    return (<div>
        <h1>Hi, Welcome to the restaurant page</h1>
        <Button onClick={()=>setIsOpen(curr=>!curr)} variant="contained">Add Restaurant</Button>
         <Model style={customStyles} isOpen={isOpen}>
        <Dialog open={true} style={{overflow: "auto"}}>
        <Style>
          <div onClick={()=>setIsOpen(false)} className="top_cross">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6673 2.27301L9.72732 1.33301L6.00065 5.05967L2.27398 1.33301L1.33398 2.27301L5.06065 5.99967L1.33398 9.72634L2.27398 10.6663L6.00065 6.93967L9.72732 10.6663L10.6673 9.72634L6.94065 5.99967L10.6673 2.27301Z"
                fill="#DCDCDC"
                stroke="#DCDCDC"
              />
            </svg>
          </div>
    <form encType="multipart/form-data" method="post" action="http://localhost:4000/restaurants/add">
          <h1>Add Restaurant</h1>
          <div>
            <p>Image Primary</p>
            <div>
            <Input disableUnderline name="imagePrimary"  placeholder="Image primary" type="file"></Input>
            </div>
          </div>
            <p>Alt Image</p>
            <div>
            <Input disableUnderline name="altImages"  placeholder="Alt images" type="file" inputProps={{multiple: true}}></Input>
            </div>
            <div className="inputBox">
            <p>Title</p>
            <Input name="title"  placeholder="Title"></Input>
            <p>State</p>
            <Input name="state"  placeholder="State"></Input>
            <p>District</p>
            <Input name="district"  placeholder="District"></Input>
            <p>Place</p>
            <Input inputProps={{rajesh:"rajesh"}} name="place" onChange={handleChange} placeholder="Place"></Input>
            <p>Contact</p>
            <Input name="contact"  placeholder="Contact"></Input>
            <p>Fssai</p>
            <Input name="fssai"  placeholder="Fssai"></Input>
            <p>Average Cost</p>
            <Input name="avgcost"  placeholder="Average Cost"></Input>
            <p>Featured</p>
            <select style={{height: "40px"}} inputProps={{section: "about"}} title="Featured" name="featured"  labelId="Select-Featured" placeholder="Featured">
            <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <p>Cuisines</p>
            <select value={form.cuisine} style={{height: "40px"}} inputProps={{section: "about"}} name="cuisine" onChange={handleChange} labelId="Select-cuisine" placeholder="Cuisine">
            <option value="5_star">5 Star</option>
            <option value="chinese">Chinese</option>
            <option value="dessert">Dessert</option>
            <option value="desserts">Desserts</option>
            <option value="fast_food">Fast Food</option>
            <option value="happy_hour">Happy Hour</option>
            <option value="north_indian">North Indian</option>
            <option value="pure_veg">Pure Veg</option>
            </select>

            <p>Types</p>
            <select value={form.type} style={{height: "40px"}} inputProps={{section: "about"}} name="type" onChange={handleChange} labelId="Select-type" placeholder="Types">
            <option value="5_star">5 Star</option>
            <option value="1 plus 1 on Food and Drinks">1 plus 1 on Food and Drinks</option>
            <option value="5 Star">5 Star</option>
            <option value="5 Star DP Dining">5 Star DP Dining</option>
            <option value="Andaz Delhi">Andaz Delhi</option>
            <option value="BBQ Special">BBQ Special</option>
            <option value="Bar">Bar</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Cafe">Cafe</option>
            <option value="Casual Dining">Casusal Dining</option>
            <option value="Contactless dining">Contactless dining</option>
            <option value="Delhi Operational">Delhi Operational</option>
            <option value="Dineout Pay">Dineout Pay</option>
            <option value="LGBTQIA">LGBTQIA</option>
            <option value="Lounge">Lounge</option>
            <option value="Luxury Dining">Luxury Dining</option>
            <option value="Night Life">Night Life</option>
            <option value="Pub">Pub</option>
            <option value="Restro Bar">Restro Bar</option>
            <option value="Safe To Eat Out">Safe To Eat Out</option>
            </select>

            <p>BestSelling</p>
            <select value={form.bestselling} style={{height: "40px"}} inputProps={{section: "about"}} name="bestselling" onChange={handleChange} labelId="Select-bestselling" placeholder="Best Selling">
            <option value="Alfredo Penne">Alfredo Penne</option>
            <option value="Briyani">Briyani</option>
            <option value="Chichen Chettinad">Chichen Chettinad</option>
            <option value="Dahi Kebab">Dahi Kebab</option>
            <option value="Dragon Roll">Dragon Roll</option>
            <option value="Golden Prawns">Golden Prawns</option>
            <option value="Kebab">Kebab</option>
            <option value="Phuket Fish">Phuket Fish</option>
            <option value="ice creame">ice creame</option>
            <option value="somasa">somasa</option>
            </select>

            <p>Facilities</p>
            <select value={form.facilities} style={{height: "40px"}} inputProps={{section: "about"}} name="facilities" onChange={handleChange} labelId="Select-facilities" placeholder="Facilities">
            <option value="Air Conditioned">Air Conditioned</option>
            <option value="Amex Accepted">Amex Accepted</option>
            <option value="Barbeque And Grill">Barbeque And Grill</option>
            <option value="Cards Accepted">Cards Accepted</option>
            <option value="DJ">DJ</option>
            <option value="Dance Floor">Dance Floor</option>
            <option value="Differently Abled Friendly">Differently Abled Friendly</option>
            <option value="Full Bar Available">Full Bar Available</option>
            <option value="Home Delivery">Home Delivery</option>
            <option value="Karaoke">Karaoke</option>
            <option value="Life">Life</option>
            <option value="Lift">Lift</option>
            <option value="Live Performance">Live Performance</option>
            <option value="Microbrewery">Microbrewery</option>
            <option value="Outdoor Seating">Outdoor Seating</option>
            <option value="Parking">Parking</option>
            <option value="Roof Top">Roof Top</option>
            <option value="Screening">Screening</option>
            <option value="Serves Alcohol">Serves Alcohol</option>
            <option value="Serves Wine">Serves Wine</option>
            <option value="Smoking Area">Smoking Area</option>
            <option value="Table Top Cocking">Table Top Cocking</option>
            <option value="Take Away">Take Away</option>
            <option value="Valet Available">Valet Available</option>
            <option value="Wallet Accepted">Wallet Accepted</option>
            <option value="Wifi">Wifi</option>
            </select>
            
            <p>Quick Filters</p>
            <select value={form.quickFilters} style={{height: "40px"}} inputProps={{section: "about"}} name="quickFilters" onChange={handleChange} labelId="Select-quickFilters" placeholder="Quick Filters">
            <option value="chinese">Chinese</option>
            <option value="dessert">Dessert</option>
            <option value="desserts">Desserts</option>
            <option value="fast_food">Fast Food</option>
            <option value="happy_hour">Happy Hour</option>
            <option value="north_indian">North Indian</option>
            <option value="pure_veg">Pure Veg</option>
            </select>
            
            <p>Open At</p>
            <Input type="Number" name="openAt"  placeholder="Open At"></Input>
            <p>Close At</p>
            <Input type="Number" name="closeAt"  placeholder="Close At"></Input>
        </div>
        <input type="submit" placeholder="Submit" className="signup_button" />
    </form>
        </Style>
        </Dialog>
        </Model>
    </div>)
}