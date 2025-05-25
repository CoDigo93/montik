import React from 'react'
import product from '../../product'
import Variants from '../Variants'
import Sizes from '../Sizes'
import ZipCode from '../ZipCode/ZipCode'
import PurchaseButton from '../PurchaseButton'

function ProductDetails() {
  const percentageDiscount = Math.ceil(((product.price.current * 100) / product.price.original) - 100)
  return (
    <div className="flex flex-col items-start sm:w-[314px] md:w-314px ">
      <h1 className="font-black flex responsive-h1">
        {product.name.toUpperCase()} <span className="font-black text-xl">®</span>
      </h1>
      <h1 className="responsive-h1 pb-3">
        {product.type.toUpperCase()}
      </h1>

      <span className="text-2xl w-[25vw] min-w-[350px] max-w-[600px] flex gap-4 mt-4 border-t-2 border-gray-100 pt-4">
        ${product.price.current} <p className="text-[#8b8b8b] line-through">${product.price.original}</p> <p className='text-[#EC192A]'>({percentageDiscount}%)</p>
      </span>

      <Variants />
      <Sizes/>
      <ZipCode/>
      <PurchaseButton/>


    </div>
  )
}

export default ProductDetails