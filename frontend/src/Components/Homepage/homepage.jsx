import { Box, Button, Card, CardActions, CardContent, CardMedia, Input, requirePropFactory, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Style from "styled-components";
import { BsSearch } from "react-icons/bs";
import "./homepage.css";

import discountten from "../../images/Homepage/disten.png";
import discounttwenty from "../../images/Homepage/distwenty.png";
import discountfifteen from "../../images/Homepage/disfif.png";
import { color } from '@mui/system';
import {ImMobile2} from "react-icons/im";
import googleplaystore from "../../images/Homepage/googleplaystore.png";
import googleappstore from "../../images/Homepage/googleappstore.png";
import connectUsingApp from "../../images/Homepage/connectusingapphomepage.png"
import { useContext, useEffect, useState } from 'react';
import { Signin } from '../signin';
import "../BookNewTable/Booktable.css"
import { Link } from 'react-router-dom';
import { ClickedContext } from '../../Context/clickedItem';
import { Carousel } from '../Carousel';

export const HomePage = () => {
    const [data, setData] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);

    const {setClickedId} = useContext(ClickedContext);

    const getData = async()=>{
        let data = await fetch(`${process.env.REACT_APP_API_URL}/restaurants`);
        let realData = await data.json();
        setData(realData.data);
        let featured = await fetch(`${process.env.REACT_APP_API_URL}/restaurants/featured`);
        let featuredReal = await featured.json();
        setFeaturedData(featuredReal.data);
    }

    const handleClick = (id)=>{
        setClickedId(id);
      }

    useEffect(()=>{
        getData();
    },[])
    return <>
      
        <Box sx={{ height: "400px", backgroundImage: `url(https://im1.dineout.co.in/images/uploads/misc/2021/Mar/31/oldherobannerwebfinal_bau.jpg)`, backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box className="searchOuterBox">
                <h1 style={{ color: "white", fontSize: "40px" }}>It's Now Safe To <span style={{ color: "#FF4C2B" }}>Crave!</span></h1>
                <Box sx={{ backgroundColor: "white", display: "flex", alignItems: "center" }}>
                    <BsSearch style={{ color: "#FF4C2B", fontSize: "30px", padding: "15px", userSelect: "none" }} />
                    <Input className="input_search" sx={{ background: "white", padding: "15px", color: "black", borderRadius: "10px", fontSize: "20px" }} fullWidth placeholder='Search for Restaurants, Cuisines, Location...' disableUnderline>
                    </Input>
                    <Button sx={{ backgroundColor: "#FF645A", textTransform: "capitalize", fontSize: "20px", margin: "10px", width: "15%", fontWeight: "bold", ":hover": { backgroundColor: "red" } }} variant={"contained"}>Search</Button>
                </Box>
            </Box>
        </Box>
        <Box style={{textAlign:"start", margin:"7%"}}>
            <h1>Restaurants Near You</h1>
        <Box sx={{display:"grid", gridTemplateColumns:"100%", gap:"5%"}}>
          {<Carousel data = {data} handleClick={handleClick}></Carousel>}
      
        </Box>

        </Box>

        {/* Featured section */}

        <Box style={{textAlign:"start", margin:"7%"}}>
        <h1>Featured Restaurants</h1>
        <Box sx={{display:"grid", gridTemplateColumns:"100%", gap:"5%"}}>
        {<Carousel data = {data} handleClick={handleClick}></Carousel>}
       
        </Box>

        </Box>

        <Box sx={{ backgroundColor: "#F3F3F3"}}>

            <Box sx={{ marginLeft: "15%", paddingTop: "20px", paddingBottom: "20px", width: "40%" , padding:"3%"}}>
                <h1>Best Offers</h1>
                <Box className="homepageDiscImg" sx={{ display: "flex", gap: "10px" }}>
                    <Box>
                        <a>
                            <img sx={{}} src={discountten}></img>
                        </a>
                    </Box>
                    <Box>
                        <a>
                            <img sx={{ border: "0.5px solid red", radius: "10px" }} src={discounttwenty}></img>
                        </a>
                    </Box>
                    <Box>
                        <a>
                            <img sx={{ border: "0.5px solid red", radius: "10px" }} src={discountfifteen}></img>
                        </a>
                    </Box>
                </Box>
            </Box>

        </Box>

        <Box className={"exploreAppBox"} sx={{ height: "500px", display: "grid" }}>
            <Box sx={{ height: "75%", width: "70%", display: "flex", margin: "auto", justifyContent: "space-between", marginTop: '7.4%', marginBottom: "0" }}>
                <Box sx={{ width: "50%", height: "100%", fontSize: "13px" }}>
                    <h1>Explore more food with</h1>
                    <h1 style={{ color: "#FF4C2B", fontSize: "35px", lineHeight: "0" }}>dineout mobile app</h1>
                    <p style={{ width: "80%", fontSize: "17px", color: "#999BA6" }}>Download the Dineout App to get latest updates on offers, deals and trending restaurants. Also get Rs.200 in your Dineout Wallet.</p>
                    <Box sx={{display:"flex", border: "1px solid #EFEFEF", alignItems: "center", justifyContent:"space-between"}}>
                    <Box style={{display:"flex", alignItems:"center"}}>
                    <ImMobile2 style={{fontSize:"25px", color:"grey"}}/>
                    <Input sx={{ background: "white", "::placeholder": { fontSize: "20px" }, padding: "10px", color: "black", borderRadius: "10px", fontSize: "17px" }} fullWidth placeholder='Your Mobile Number' disableUnderline>
                    </Input>
                    </Box>

                    <Button variant='contained' style={{padding:"14px", width:"22%", fontWeight:"bold", textTransform:"capitalize", fontSize:"15px", backgroundColor:"#FF645A"}}>Send Link</Button>
                    </Box>

                    <Box my={"30px"} sx={{display:"flex", gap:"10px"}}>
                        <img src={googleappstore}></img>
                        <img src={googleappstore}></img>
                    </Box>
                </Box>
                <Box sx={{ width: "45%", height: "100%", backgroundImage:`url(https://im1.dineout.co.in/images/uploads/misc/2019/Dec/4/screenshot.png)`, backgroundSize:"cover"}}>
                </Box>
            </Box>
        </Box>

    </>
}