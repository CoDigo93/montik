import React from 'react'
import useStore from '../../store'


function ProductImage() {
  const {stateProduct} = useStore()
  const {currentMainImage} = stateProduct

  const mainImage = currentMainImage

  return (
     <div className="lg:w-[35vw] lg:h-[35vw] md:w-full md:h-[10vw] sm:h-[10vw] rounded-2xl bg-[#f5f5f5]"><img className='rounded-2xl' src={ mainImage} alt="primer" />
</div>

  )
}

export default ProductImage