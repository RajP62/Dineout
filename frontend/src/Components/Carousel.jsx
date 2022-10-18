
import Slider from "react-slick";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Input, requirePropFactory, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import LeftArrow from "../images/Homepage/LeftArrow.svg"
import RightArrow from "../images/Homepage/RightArrow.svg"
 


export const Carousel = ({data=[],handleClick})=>{

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img style={{width:"100px"}} src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );


    const settings = {
        dots: true,
        infinite: false,
      
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
      };
      return (
        <div>
          
          <Slider {...settings}>
         {data.map((mainData,ind)=>{
          return ( <Link key={uuidv4()} to={`/detail`}>
          <Card className="main-card" sx={{ maxWidth: 280 ,maxHeight: 460}} key={mainData.id} onClick={()=>handleClick(mainData._id)}>
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
                <Box className="card-location"> {mainData.place},{mainData.district},{mainData.state[0]!="6"?mainData.state:null}</Box>
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
          </Link>)
         

         })}
          </Slider>
        </div>
      );
}
   
