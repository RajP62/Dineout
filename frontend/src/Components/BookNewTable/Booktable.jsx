import React, { useEffect, useState } from "react";
import "./Booktable.css";
import Grid from '@mui/material/Grid'
import { Dots } from 'loading-animations-react';
import {v4 as uuidv4} from "uuid";


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
import { ButtonGroup } from "@mui/material";
import Box from '@mui/material/Box';
import { FilterData } from "./Filters";
import {useContext} from "react";
import { ClickedContext } from "../../Context/clickedItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SORT } from "../../Store/actiontype/auth.action.type";


const Tabledisplaydata = () => {
  const {setClickedId} = useContext(ClickedContext);
  let {filters,sort}= useSelector((state)=>state)
let [loading,setloading]=useState(false)

  let {cuisines,tags,features,dishes,facilities}=filters
  console.log(cuisines,tags)
  const [resturent, setResturent] = useState([]);
  let [page, setpage]=useState(1)
  let [totalpages,settotalpages]=useState(1)
  const getResturents = async () => {
    setloading(true)
    const response = await fetch(`https://dineoutappclone.herokuapp.com/restaurants?cuisines=${cuisines.join("&")}&tags=${tags.join("&")}&features=${features.join("&")}&dishes=${dishes.join("&")}&facilities=${facilities.join("&")}&sort=${sort}&page=${page}&limit=6`, { mode: "cors" });
    const data = await response.json()
    setloading(false)
    console.log(data)
console.log(data.totalPages)
    setResturent(data.data);
    settotalpages(data.totalPages)

  }
  useEffect(() => {
    getResturents();
  }, [filters,sort,page])

  
let dispatch = useDispatch()
  // const  filterItem = (categry) =>{
  //   const updateItem = data.filter((currelem) => {
  //     return currelem.type.name === categry;
  //   });
  //     setResturent(updateItem)
  // }

  const handleClick = (id)=>{
    setClickedId(id);
  }

let handlechange=(e)=>{
dispatch({type:SORT,payload:e.target.value})
}
  
let arr = new Array(Math.ceil(totalpages/6)).fill(1)


  console.log(filters,"filters")
  return (
    <>
    
    <div style={{backgroundColor:"rgb(244,244,244)",marginTop:"40px"}}>
      <Container className="Bookatable_Outerbox" style={{}}>
        <Grid container spacing={5}>
          <Grid className="left" >
            <FilterData />
            <h5 className="heading1">Top 10 Resturent In Banglore</h5>
          </Grid>
          <Grid className="right">
            <div className="right-heading">
              <span className="right-heading-head">
                <h2 className="heading1">Best Restaurants Near Me in Bangalore</h2>
                <h3 className="heading1 text1"> Sort By</h3>

              </span>
              <div className="right-heading-head">

                <FormControl sx={{ minWidth: 120 }}>
                  <Select onChange={handlechange} defaultChecked="popularity"  className="select"  id="grouped-select" label="Grouping">
                    <MenuItem  value="popularity">Popularity</MenuItem>
               
                    <MenuItem value="price_asc">Price Low to High</MenuItem>
                    <MenuItem value="price_desc">Price High to Low</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
{loading?<Dots></Dots>:<div style={{display:"grid", gridTemplateColumns:"30% 30% 30%", gap:"3%", marginBottom:"10%"}}>
            {
              resturent.map((mainData) => {
                return (
                  <>
               
                  <Link key={uuidv4()} to={`/detail`}>
                    <Card className="main-card" sx={{ maxWidth: 280 }} key={mainData.id} onClick={()=>handleClick(mainData._id)}>
                      <CardMedia
                        component="img"
                        alt={mainData.altImages}
                        className="card-image"
                        image={mainData.imagePrimary}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" textAlign="left" component="div">
                          {mainData.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Box className="card-location"> {mainData.place}, {mainData.district}, {mainData.state[0]!="6"?mainData.state:null}</Box>
                          <div className="card-location">
                          ₹ {mainData.avgcost} | {mainData.about.quickFilters.join(" | ")}
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
            </div>}
            
     
          </Grid>
        </Grid>
      </Container>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {arr.map((e,i)=><Button key={uuidv4()} style={{margin:"10px"}} onClick={()=>setpage(i+1)}>{i+1}</Button>)}
</ButtonGroup>



      </div>
      </div>
    </>
  );
};

export { Tabledisplaydata };

