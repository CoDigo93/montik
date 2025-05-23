import React, {useState} from 'react'
import product from '../../product'
import useStore from '../../store'
import clsx from 'clsx'
import { setDataToStorage, getStoredData } from '../../utils/storage'


function Variants() {
  const { selectVariant, stateProduct } = useStore()
  const {storeVariant} = stateProduct
  const [selectedVariantName, setSelectedVariant] = useState(storeVariant?.name)

  const storedData = getStoredData('selectedVariant')
  const variantColor = storedData?.hex || storeVariant?.hex



  const handleSelection = (event, index, variant) => {
    setDataToStorage('selectedVariant', variant, 2, index)
    setDataToStorage('thumbIndex', 0, 2)
    selectVariant(variant, index, 'variant')
    setSelectedVariant(event.currentTarget.dataset.name)
  }


  return (
    <>
      <p className="flex mt-4 mb-2">
        <span className="mr-2 text-sm">Color:</span>
        <span className="font-thin text-sm" style={{ color: variantColor }}> {selectedVariantName} </span>
      </p>
      <section className="flex gap-2">
      {product?.variant?.map((variant, index) =>(

        <div
        key={variant.name}
        className="flex flex-col items-center rounded-lg"
        onClick={(event) => handleSelection(event, index,
          {
            name:variant.name,
            hex:variant.hex,
            images: {
              main: variant.images.main,
              thumbnails: variant.images.thumbnails
            }})}
        data-name={variant.name}
        >
          <div
            className={clsx(
              "w-16 h-16 rounded-lg bg-[#f5f5f5] flex justify-center relative cursor-pointer transition-all duration-700 ease-out border-2",
              {
                "border-[#006DD9]": selectedVariantName === variant.name,
                "border-transparent hover:border-[#006DD9]": selectedVariantName !== variant.name,
              }
            )}
            />
            <img className="w-16 h-16 absolute pointer-events-none"src={variant?.images?.thumbnails?.[0]} alt="variant selection"/>
        </div>

      ))}
      </section>
    </>
  )
}

export default Variants