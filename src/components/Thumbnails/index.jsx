import React, {useState,Children, useEffect, useCallback } from 'react'
import product from '../../product'
import useStore from '../../store'
import { setDataToStorage, getStoredData } from '../../utils/storage'
import clsx from 'clsx'

function Thumbnails() {
  const thumbIndex = getStoredData('thumbIndex')?.item
  const { stateProduct, selectVariant } = useStore()
  const {storeVariant} = stateProduct
  const [selectedThumbIndex, setSelectedThumb] = useState(thumbIndex)

  const storedThumbnails = getStoredData('selectedVariant')?.item?.images?.thumbnails


  const SelectFirstThumbnailOnVariantChange = useCallback(() => {
    setSelectedThumb(undefined)
  },[])

  const PersistSelectedThumbnailOnReload = useCallback(()=>{
    if(thumbIndex){
      setSelectedThumb(thumbIndex)
    }
  },[thumbIndex])


  useEffect(()=>{
    SelectFirstThumbnailOnVariantChange()
  },[stateProduct?.storeVariant, SelectFirstThumbnailOnVariantChange])

  useEffect(()=>{
    PersistSelectedThumbnailOnReload()
  },[thumbIndex, PersistSelectedThumbnailOnReload])


  const handleSelection = (event, index, thumb) => {
    const selectedVariant = product.variant.filter(variant => variant.name === storeVariant.name)
    selectVariant( selectedVariant, index, 'thumb',thumb)
    setDataToStorage('thumbIndex', index)
    setSelectedThumb(index)
  }


  const localThumbs = product.variant
    .filter((variant) => variant?.name === storeVariant?.name)
    .flatMap((variant) => variant?.images?.thumbnails?.map((thumb) => thumb))


  const data = storedThumbnails || localThumbs

  const thumbnails = data.map((thumb, index) => (
    <img
     key={`thumbnail${thumb}-${index}`}
     className={clsx("w-28 h-28 rounded-lg bg-[#f5f5f5] cursor-pointer",{
      ["border-2 border-[#006DD9]"]: selectedThumbIndex ? selectedThumbIndex === index : index === 0
     })}
     src={thumb}
     onClick={(event) => handleSelection(event, index, thumb)}
     data-thumb={thumb}
   />
  ))


   return <div className='flex gap-2'>{Children.toArray(thumbnails)}</div>


}

export default Thumbnails
