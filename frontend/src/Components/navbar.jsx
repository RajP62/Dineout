import "./navbar.css"
import Button from '@mui/material/Button';
import { SigninContext } from "../Context/SignInContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import  MultipleSelectPlaceholder from "./multipleSelector"
import { Signin } from "./signin";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP } from "../Store/actiontype/auth.action.type";
import { SIGNIN } from "../Store/actiontype/auth.action.type";
import { Signup } from "./signup";
function Navbar(){

  // const { handleModel} =
  //   useContext(SigninContext);

let dispatch = useDispatch()

let {signup} = useSelector((state)=>state)
console.log(signup,"signup")

let handleLogin = ()=>{
  dispatch({type: SIGNIN});
}

  let handlesignup = ()=>{
dispatch({type:SIGNUP})
  }
  return(
    <>
    <div className="box">
      <div>
      <Link to="/">  <img
                style={{ width: "110px" }}
                src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                alt="logo"
              /></Link>
    
      </div>
<div>
  <Signin/>
  
  <Signup/>
<MultipleSelectPlaceholder/>
</div>
<div>
<input className="search" placeholder="Search for Restaurants, Cuisines ,Location..." type="text"/>
<Button sx={{backgroundColor:" rgb(252, 97, 97)",width:"100px",textTransform:"lowercase",fontWeight:"700"}}  variant="contained" size="small" color="error">
Search
</Button>
</div>
<div>
<div style={{display:"flex"}}>
<Button onClick={handleLogin}  sx={{backgroundColor:" rgb(252, 97, 97)",width:"100px",textTransform:"lowercase",fontWeight:"700"}} variant="contained" size="small" color="error">
Login
</Button>
<Button  onClick={handlesignup} sx={{backgroundColor:" rgb(252, 97, 97)",width:"100px",textTransform:"lowercase",fontWeight:"700"}} variant="contained" size="small" color="error">
Signup
</Button>
</div>
</div>
    </div>
      <div className="links" >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/sort">Book a table</Link>
      </div>
      <div>
        <Link to="/">Dineout Pay</Link>
      </div>
      <div>
        <Link to="/">Dineout Passport</Link>
      </div>
      <div>
        <Link to="/success">Booking Details</Link>
      </div>
    </div>
  
    </>
  )
}

export default Navbar;