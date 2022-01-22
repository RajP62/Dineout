import React from 'react';

function ResCartData({project}) {
    return <div>
       <div className='project-cart-image'>
            <img src={project.Primeryimage} className='project-photo' alt="" />
            <div>{ project.name}</div>
            <div>{ project.address}</div>
                
            </div>
  </div>;
}

export default ResCartData;
