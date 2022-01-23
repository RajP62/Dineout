import React, { useEffect, useState } from "react";
import "./Booktable.css";
import Grid from '@mui/material/Grid'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FilterData } from "./Filters";
import {useContext} from "react";
import { ClickedContext } from "../../Context/clickedItem";
import { Link } from "react-router-dom";


const Tabledisplaydata = () => {
  const {setClickedId} = useContext(ClickedContext);
 

  const [resturent, setResturent] = useState([]);
  const getResturents = async () => {
    const response = await fetch('https://backend-dineout.herokuapp.com/restaurants', { mode: "cors" });
    const data = await response.json()
    console.log(data)
    setResturent(data.data);

  }
  // const cuisines = async () => {
  //   const response = await fetch('https://backend-dineout.herokuapp.com/restaurants', { mode: "cors" });
  //   const data = await response.json()
  //   let filtered = data.filter(el=>el.about.quickFilters.includes("Pure Veg")? true : false);
  //   setResturent(filtered);
  // }
  useEffect(() => {
    getResturents();
  }, [])

  

  // const  filterItem = (categry) =>{
  //   const updateItem = data.filter((currelem) => {
  //     return currelem.type.name === categry;
  //   });
  //     setResturent(updateItem)
  // }

  const handleClick = (id)=>{
    setClickedId(id);
  }

  return (
    <>
    <div style={{backgroundColor:"rgb(231, 225, 225)"}}>
      <Container className="Bookatable_Outerbox" style={{}}>
        <Grid container spacing={5}>
          <Grid className="left" >
            <FilterData />
            <h5 className="heading1">Top 10 Resturent In Banglore</h5>
          </Grid>
          <Grid className="right">
            <div className="right-heading">
              <sapn className="right-heading-head">
                <h2 className="heading1">Best Restaurants Near Me in Bangalore</h2>
                <h3 className="heading1 text1"> Sort By</h3>

              </sapn>
              <div className="right-heading-head">

                <FormControl sx={{ minWidth: 120 }}>
                  <Select className="select" defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem  value={1}>Popularity</MenuItem>
                    <MenuItem value={2}>Rating</MenuItem>
                    <MenuItem value={3}>Price Low to High</MenuItem>
                    <MenuItem value={4}>Price High to Low</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"30% 30% 30%", gap:"3%", marginBottom:"10%"}}>
            {
              resturent.map((mainData) => {
                return (
                  <>
                  <Link to={`/detail`}>
                    <Card className="main-card" sx={{ maxWidth: 280 }} key={mainData.id} onClick={()=>handleClick(mainData._id)}>
                      <CardMedia
                        component="img"
                        alt={mainData.altImages}
                        className="card-image"
                        image={mainData.imagePrimary}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {mainData.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Box className="card-location"> {mainData.place},{mainData.district},{mainData.state}</Box>
                          <div className="card-location">
                            {mainData.avgcost} for 2 (approx)|{mainData.about.bestselling}
                          </div>
                        </Typography>
                        <div className="card-btn">Dineout</div>
                      </CardContent>
                      <CardActions className="coupan">
                        <div className="coupan-offer"><img src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/21/free_offer.png" className="coupan-image" alt="coupan" /></div>
                        <div className="coupan-offer"><h5 className="coupan-text">15% Off The Total Bill</h5></div>
                        <div className="coupan-offer"><Button variant="contained" className="coupan-button" size="small"><h6 className="coupan-text1">Avail Now</h6></Button></div>
                      </CardActions>
                    </Card>
                    </Link>
                  </>
                )
              })
            }
            </div>
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  );
};

export { Tabledisplaydata };

