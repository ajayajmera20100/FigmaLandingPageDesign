import React from 'react';
import "./TrainedProducts.css";
import ProductCard from './ProductCard'
import p1 from "../../images/p1.PNG"
import p2 from "../../images/p2.PNG"
import p3 from "../../images/p3.PNG"
import Heading from "../HeadingComponent/Heading"

const TrainedProducts = () => {
  return (
    <>
        <div className="products-container">
            <Heading heading="on what you will be trained!" subheading="Tutor Master will cover the following topics.." />
            <div className="cards">
                <ProductCard topic="Country topics" icon={p1} />
                <ProductCard topic="Product topics" icon={p2} />
                <ProductCard topic="Blanket topics" icon={p3} />
            </div>
        </div>
    </>
  )
}

export default TrainedProducts