import React, {  useEffect, useState } from "react";
import "./Booktable.css";
import Grid from '@mui/material/Grid'

import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../../Store/actiontype/auth.action.type";

const FilterData = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [filter, setFilter] = useState(
      {
        dishes:[],
        tags:[],
        features:[],
        facilities:[],
        cuisines:[]
      }
    )
let dispatch=useDispatch()
    let handlechange=(e)=>{
    
let {name,value}=e.target
console.log(name,value)


  //do something
if(e.target.checked){
  setFilter({...filter,[name]:[...filter[name],value]})
}else{

  let filteredarr = filter[name].filter((e)=>e!=value)
  setFilter({...filter,[name]:[...filteredarr]})
}
  




  
  
  
}

useEffect(()=>{
  
  dispatch({type:SET_FILTER,payload:filter})
    },[filter])

     const cuisines = async () => {
    const response = await fetch('https://backend-dineout.herokuapp.com/restaurants', { mode: "cors" });
    const data = await response.json()
    // let filtered = data.filter(el=>el.about.quickFilters.includes("Pure Veg")? true  onChange={handlechange}: false);
    // setFilter(filtered);
  }

    return(
        <Grid className="filters_wrap">

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Quick Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* <TextField className="search-bar" id="outlined-basic" label="Search" variant="outlined" /> */}
              <FormGroup>
         
                <FormControlLabel name = "dishes" onChange={handlechange} control={<Checkbox />} label="Pure Veg" value="pure_veg" />
                <FormControlLabel name = "dishes" onChange={handlechange} control={<Checkbox />} label="5 Star" value="5_star" />
                <FormControlLabel name = "dishes"  onChange={handlechange}control={<Checkbox />} label="Fast Food" value="fast_food" />
               
             
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Cuisines</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             
              <FormGroup>
                <FormControlLabel control={<Checkbox />}  onChange={handlechange} label="North Indian" name = "cuisines" value="north_indian" />
                <FormControlLabel control={<Checkbox />} onChange={handlechange} label="Chinese" name = "cuisines" value="chinese" />
                <FormControlLabel control={<Checkbox />} onChange={handlechange} label="Fast Food" name = "cuisines" value="fast_food" />
                <FormControlLabel control={<Checkbox />} onChange={handlechange} label="Desserts" name = "cuisines" value="desserts" />
           
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Tags</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Casual Dining" name="tags" value = "Casual Dining" onChange={handlechange} />
                <FormControlLabel control={<Checkbox />} label="Dineout Pay" name="tags" value = "Dineout Pay" onChange={handlechange} />
                <FormControlLabel control={<Checkbox />} label="Breakfast" name="tags" value = "Breakfast" onChange={handlechange} />
                <FormControlLabel control={<Checkbox />} label="Night Life" name="tags" value = "Night Life" onChange={handlechange} />
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Features</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             
              <FormGroup>
                <FormControlLabel control={<Checkbox />} onChange={handlechange} name="features" value="Card Accepted" label="Card Accepted" />
                <FormControlLabel control={<Checkbox />} onChange={handlechange} name="features" value="Home Delivery" label="Home Delivery" />
                <FormControlLabel control={<Checkbox />} onChange={handlechange} name="features" value="Air Conditioned" label="Air Conditioned" />
                <FormControlLabel control={<Checkbox />} onChange={handlechange} name="features" value="Wallet Accepted" label="Wallet Accepted" />
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Facilities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormGroup>
                <FormControlLabel onChange={handlechange} name="facilities" value="Outdoor Seating" control={<Checkbox />} label="Outdoor Seating" />
                <FormControlLabel onChange={handlechange} name="facilities" value="Take Away" control={<Checkbox />} label="Take Away" />
                <FormControlLabel onChange={handlechange} name="facilities" value="DJ" control={<Checkbox />} label="DJ" />
                <FormControlLabel onChange={handlechange} name="facilities" value="Smoking Area" control={<Checkbox />} label="Smoking Area" />
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    )
}
export { FilterData }