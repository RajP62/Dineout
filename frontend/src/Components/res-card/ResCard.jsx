import React from 'react';
import Data from "../api-data/Dummy.js";
import ResCartData from './ResCartData';

function ResCard() {
  const data = Data
  console.log(data)
    return <div>
        {data.map((project)=>{
                return <ResCartData project={project} />
        })}
  </div>;
}

export default ResCard;
