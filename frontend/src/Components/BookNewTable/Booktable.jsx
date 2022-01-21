import React from "react";
import "./Booktable.css";
import Grid from '@mui/material/Grid'

import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Tabledisplaydata = () => {
  // console.log(props);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container className="Bookatable_Outerbox">
        <Grid container spacing={5}>
          <Grid className="left" >
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
                          <Typography className="modal-content " sx={{ fontSize: 18, fontWeight: 555, color: "GrayText"}}>Quick Filters</Typography>
                          </sapn>
                          <span>
                          <TextField className="modal-content"  id="outlined-basic" label="Search" variant="outlined" />
                          </span>
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
                      <Button sx={{marginLeft:-15}} onClick={handleOpen}>Show More(12)</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box className="modal">


                          <Typography sx={{ fontSize: 18, fontWeight: 555, color: "GrayText" }}>Quick Filters</Typography>

                          <Typography>
                            <TextField className="search-bar"  id="outlined-basic" label="Search" variant="outlined" />
                            <FormGroup>
                              <sapn className="modal-content">
                              <FormControlLabel control={<Checkbox />} label="North Indian" />
                              <FormControlLabel control={<Checkbox />} label="Chinese" />
                              <FormControlLabel control={<Checkbox />} label="Fast Food" />
                              <FormControlLabel control={<Checkbox />} label="Desserts" />
                              </sapn>
                              <span className="modal-content">
                              <FormControlLabel control={<Checkbox />} label="5 Star" />
                              <FormControlLabel control={<Checkbox />} label="Happy Hour" />
                              <FormControlLabel control={<Checkbox />} label="Pure Veg" />
                              <FormControlLabel control={<Checkbox />} label="Dessert" />
                              </span>
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
            <h5 className="heading1">Top 10 Resturent In Banglore</h5>
          </Grid>
          <Grid className="right">
            <div className="right-heading">
              <sapn className="right-heading-head">
                <h2 className="heading1">Best Restaurants Near Me in Bangalore</h2>
                <h3 className="heading1 text1"> Sort By</h3>

              </sapn>
              <span className="right-heading-head">

                <FormControl sx={{ minWidth: 120 }}>
                  <Select className="select" defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem value={1}>Popularity</MenuItem>
                    <MenuItem value={2}>Rating</MenuItem>
                    <MenuItem value={3}>Price Low to High</MenuItem>
                    <MenuItem value={4}>Price High to Low</MenuItem>
                  </Select>
                </FormControl>
              </span>
            </div>

            <Card className="main-card" sx={{ maxWidth: 270 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                className="card-image"
                image="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/8/l/j/p87534-161719349660646a18dc26a.jpg?tr=tr:n-medium"
              />
              <CardContent>
              <Box
                  style={{
                    textAlign: "left",
                    marginLeft: "10px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "230px",
                  }}
                >
                  <b
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Badmaash
                  </b>
                </Box>
                <Typography variant="body2" color="text.secondary">
                <div className="card-data"><ul><span><span>₹ 2,500 for 2 (approx)</span><span> | </span><a href={"/bangalore-restaurants/mughlai-cuisine" }>Mughlai</a><span>, </span><a href={"/bangalore-restaurants/awadhi-cuisine"}>Awadhi</a><span>, </span>Modern Indian<span>, </span><a href="/bangalore-restaurants/barbecue-cuisine" data-w-onclick="stopClickPropagation|w1-restarant">Barbecue Finger Food</a><span>, </span> <a href={"/bangalore-restaurants/indian-cuisine-cuisine"}>Indian Cuisine</a></span>1 offer available</ul></div>
                </Typography>
                <span className="btn">Dineout</span>
              </CardContent>
              <CardActions className="coupan">
                <span className="coupan-offer"><img src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/21/free_offer.png" className="coupan-image" alt="coupan" /></span>
                <span className="coupan-offer"><h5 className="coupan-text">15% Off The Total Bill</h5></span>
                <span className="coupan-offer"><Button variant="contained" className="coupan-button" size="small"><h6 className="coupan-text1">Avail Now</h6></Button></span>
              </CardActions>
            </Card>
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export { Tabledisplaydata };
