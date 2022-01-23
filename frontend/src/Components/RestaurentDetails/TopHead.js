import React from 'react'
import './RestraurantDetail.css'

const TopHead = ({product}) =>{
    return (
        <div>
            <div className="container">
        <ul className="breadcrumbs">
          <li>
            <a href="/" itemprop="item">
              <span itemprop="name">dineout</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i>
          </li>
          <li>
            <a href="/mumbai-restaurants" itemprop="item">
              <span itemprop="name">{product.state}</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i> 
          </li>
          <li>
            <a href="/mumbai-restaurants/navi-mumbai" itemprop="item">
              <span itemprop="name">{product.district}</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i>
          </li>{" "}
          <li>
            <a href="/mumbai-restaurants/navi-mumbai/rabale" itemprop="item">
              <span itemprop="name">{product.place}</span>
            </a>
          </li>
          <li>
          <i class="fas fa-greater-than"></i>
          </li>{" "}
          <li className="active">{product.title}</li>
        </ul>
      </div>
      <br></br>
        </div>
    )
}

export default TopHead ;