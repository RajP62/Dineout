import React, {  useState } from "react";
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

const FilterData = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [filter, setFilter] = useState([])
     const cuisines = async () => {
    const response = await fetch('https://backend-dineout.herokuapp.com/restaurants', { mode: "cors" });
    const data = await response.json()
    let filtered = data.filter(el=>el.about.quickFilters.includes("Pure Veg")? true : false);
    setFilter(filtered);
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
              <TextField className="search-bar" id="outlined-basic" label="Search" variant="outlined" />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Dineout Pay" />
                <FormControlLabel control={<Checkbox />} label="Pure Veg" />
                <FormControlLabel control={<Checkbox />} label="5 Star" />
                <FormControlLabel control={<Checkbox />} label="Buffet" />
                <Button sx={{}} onClick={handleOpen}>Show More(4)</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="modal">

                    <sapn>
                      <Typography className="modal-content " sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Quick Filters</Typography>
                    </sapn>
                    <div>
                      <TextField className="modal-content" id="outlined-basic" label="Search" variant="outlined" />
                    </div>
                    <Typography>
                      <FormGroup>

                        <div className="modal-content">

                          <FormControlLabel control={<Checkbox />} label="North Indian" />
                          <FormControlLabel control={<Checkbox />} label="Chinese" />
                          <FormControlLabel control={<Checkbox />} label="Fast Food" />
                          <FormControlLabel control={<Checkbox />} label="Desserts" />
                          <FormControlLabel control={<Checkbox />} label="5 Star" />
                          <FormControlLabel control={<Checkbox />} label="Happy Hour" />
                        </div>
                        <div className="modal-content">
                          <FormControlLabel control={<Checkbox />} label="Pure Veg" />
                          <FormControlLabel control={<Checkbox />} label="Dessert" />
                        </div>
                      </FormGroup>
                    </Typography>

                  </Box>
                </Modal>
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
              <TextField className="search-bar" id="outlined-basic" label="Search" variant="outlined" />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="North Indian" />
                <FormControlLabel control={<Checkbox />} label="Chinese" />
                <FormControlLabel control={<Checkbox />} label="Fast Food" />
                <FormControlLabel control={<Checkbox />} label="Desserts" />
                <Button sx={{ marginLeft: -15 }} onClick={handleOpen}>Show More(12)</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="modal">


                    <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Cuisines</Typography>

                    <Typography>
                      <TextField className="search-bar" id="outlined-basic" label="Search" variant="outlined" />
                      <FormGroup>
                      <div class="column">
                        <div className="modal-content">
                          <span className="modal-list">
                        <a href="#">Afgani</a>
                        <a href="#">Asian</a>
                        <a href="#">African</a>
                        <a href="#">Austrailia</a>
                        <a href="#">Andhra</a>
                        <a href="#">Avadhi</a>
                        <a href="#">Bakery</a>
                        </span>
                        </div>
                        <div className="modal-content">
                        <span className="modal-list">
                        <a href="#">Bangali</a>
                        <a href="#">Bihari</a>
                        <a href="#">Biryani</a>
                        <a href="#">Burger</a>
                        <a href="#">Cantonse</a>
                        <a href="#">Coastal</a>
                        </span>
                        </div>
                        <div className="modal-content">
                        <span className="modal-list">
                        <a href="#"></a>
                        <a href="#">Coffe</a>
                        <a href="#">Deli</a>
                        <a href="#">Desserts</a>
                        <a href="#">Doughnuts</a>
                        <a href="#">Drinks</a>
                        </span>
                        </div>
                        <div className="modal-content">
                        <span className="modal-list">
                        <a href="#">European</a>
                        <a href="#">Finger Food</a>
                        <a href="#">Fast Food</a>
                        <a href="#">Greek</a>
                        <a href="#">Indian</a>
                        <a href="#">Japnese</a>
                        </span>
                        </div>
                    </div>
                      </FormGroup>
                    </Typography>

                  </Box>
                </Modal>
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
              <TextField className="search-bar" id="outlined-basic" label="Search" variant="outlined" />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Casual Dining" />
                <FormControlLabel control={<Checkbox />} label="Dineout Pay" />
                <FormControlLabel control={<Checkbox />} label="Breakfast" />
                <FormControlLabel control={<Checkbox />} label="Pure Veg" />
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
              <TextField className="search-bar" id="outlined-basic" label="Search" variant="outlined" />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Card Accepted" />
                <FormControlLabel control={<Checkbox />} label="Home Delivery" />
                <FormControlLabel control={<Checkbox />} label="Air Conditioned" />
                <FormControlLabel control={<Checkbox />} label="Wallet Accepted" />
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
            <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Dineout Passport</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="30% Dineout Passport" />
                <FormControlLabel control={<Checkbox />} label="Dp Food Bill" />
                <FormControlLabel control={<Checkbox />} label="1 Plus 1 Buffet" />
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    )
}
export { FilterData }