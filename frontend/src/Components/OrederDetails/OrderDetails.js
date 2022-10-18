import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { SETAUTH } from "../../Store/actiontype/auth.action.type";
import { useNavigate } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  fontSize: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

export const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
const [userData, setUserData] = useState({});
const {firstName, lastName, email} = userData;
  useEffect(()=>{
    fetch(`http://localhost:4000/users`,{credentials:"include"}).then(res=>res.json()).then(res=>{
      console.log("backend response",res);
        if(res.error){
          console.log("entering");
          navigate("/");
        }
        else{
          setUserData(res.data);
        }
    }).catch(e=>{
      console.log(e.message);
    })
  },[]);

  useEffect(()=>{
    dispatch({type: SETAUTH});
  })


  let {restaurantDetails,bookingDetails}=useSelector((state)=>state)

  console.log(restaurantDetails,bookingDetails)
  return (
    <Box sx={{ overflow: "hidden"}}>
      <Paper sx={{ maxWidth: 850, my: 1, mx: "auto", p: 1}}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item xs zeroMinWidth>
            <Typography align="center">
              <h1>{firstName+ " "+ lastName}</h1>
            </Typography>
            <Typography align="center" container wrap="nowrap" color="#585858">
              <h3>{restaurantDetails.adress}</h3>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 850, my: 1, mx: "auto", p: 1 }}>
      <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1 }}>
          <Item><h2>Guest Details </h2></Item>
        </Box>
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1 }}>
          <Item>Guest Name: </Item>
          <Item>{firstName+" "+lastName}</Item>
        </Box>
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>Email : </Item>
          <Item>{email}</Item>
        </Box>        
      </Paper>



      <Paper sx={{ maxWidth: 850, my: 1, mx: "auto", p: 1 }}>
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1 }}>
          <Item><h2>Booking Summary</h2></Item>
        </Box>
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1 }}>
          <Item>Table Status - Confirmed </Item> <Item>Your reservation is confirmed! Happy Dining</Item>
        </Box>
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>Guests </Item><Item>{`2 Guests`}</Item>
        </Box>  
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>Name </Item><Item>{firstName+" "+lastName}</Item>
        </Box>    
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>ID </Item><Item>DO14194830</Item>
        </Box> 
      </Paper>
    </Box>
  );
};
