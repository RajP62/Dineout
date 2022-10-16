import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function ImageSlider({data=[]}) {
  
console.log(data,"data")
    return (
     

        <Carousel
            autoPlay={true}
            next={() => { console.log("next") }}
            prev={() => { console.log("prev") }}
indicators={false}
        

        >
            {
                data.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
           <img style={{width:"800px",height:"400px"}} src={props.item}></img>

          
        </Paper>
    )
}


export default ImageSlider