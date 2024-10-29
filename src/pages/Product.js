import React from 'react'
import './Product.css'

const Product = ({id,name,image,price,discount}) => {
  return (
    <div className='product-cart'>
        <img className='product-image' src={image} alt={name} className='product-image'></img>
        <h4 className='product-name'>{name}</h4>
        <p className='product-price'>{price}</p>
        <p className='product-discount'>{discount}</p>
    </div>
  )
}

export default Product
