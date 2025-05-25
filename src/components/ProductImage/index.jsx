import React from 'react'
import useStore from '../../store'


function ProductImage() {
  const {stateProduct} = useStore()
  const {currentMainImage} = stateProduct

  const mainImage = currentMainImage

  return (
    <div className="w-[314px] h-[314px] grid grid-rows-[314px] rounded-2xl bg-[#f5f5f5] lg:w-[35vw] lg:h-[35vw] lg:grid-rows-[35vw]">
      <img className="rounded-2xl" src={mainImage} alt="primer" />
    </div>



  )
}

export default ProductImage