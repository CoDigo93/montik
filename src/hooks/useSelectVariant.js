import product from "../product"
import useStore from "../store"

export function useSelectVariant(imageType, index = undefined){
  const {stateProduct: { variant: storeVariant }, currentMainImage} = useStore()
  const pathOfSelectedImage = product.variant.map(variant => {
    if(variant.name !== storeVariant.name) return

    return currentMainImage === 'variant' ? variant?.images[imageType][0] : variant?.images[imageType][index]
  })
  const validValue = pathOfSelectedImage.find(value => value !== undefined)

  return {validValue}
}

export function useSelectMainImage(index){
  const {variant: storeVariant} = useStore()
  const pathOfSelectedImage = product.variant.map(variant => {
    if(variant.name !== storeVariant.name) return

    return variant?.images.main[index]
  })
  const mainImage = pathOfSelectedImage.find(value => value !== undefined)

  return {mainImage}
}