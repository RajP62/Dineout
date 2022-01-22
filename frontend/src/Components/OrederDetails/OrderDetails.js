import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  fontSize: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

const OderDetails = () => {
  return (
    <Box sx={{ overflow: "hidden"}}>
      <Paper sx={{ maxWidth: 850, my: 1, mx: "auto", p: 1}}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item xs zeroMinWidth>
            <Typography align="center">
              <h1>ABs - Absolute Barbecues </h1>
            </Typography>
            <Typography align="center" container wrap="nowrap" color="#585858">
              <h3>Chandivali, Powai, Mumbai,</h3>
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
          <Item>Vijay</Item>
        </Box>
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>Phone no.: </Item>
          <Item>908567657888</Item>
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
          <Item>Date & Time </Item><Item>24th Jan 2022 at 11:30 AM</Item>
        </Box>  
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>Guests </Item><Item>2 Guests</Item>
        </Box>  
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>Name </Item><Item>Vijay</Item>
        </Box>    
        <Box item xs sx={{ display: "flex",justifyContent: "space-between", p: 1, m: 1, }}>
          <Item>ID </Item><Item>DO14194830</Item>
        </Box> 
      </Paper>
    </Box>
  );
};
export default OderDetails;
