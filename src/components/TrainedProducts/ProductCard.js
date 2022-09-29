import React from 'react'
import './TrainedProducts.css'

const ProductCard = (props) => {
  return (
    <div className="product-card-container">
        <div className="main-content">
            <div className="icon-container"><img src={props.icon} alt="" /></div>
            <div className="heading">
                <h2>{props.topic}</h2>
                <p>USP #1 showcased here with brief as needed</p>
            </div>
            <button className="know-more-btn">Know More</button>
        </div>
    </div>
  )
}

export default ProductCard