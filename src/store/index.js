import { create } from 'zustand'
import product from '../product';
import { getStoredData } from '../utils/storage'

const storedVariant = getStoredData('selectedVariant')?.item
const storedMainImageIndex = getStoredData('thumbIndex')?.item
const storedSize = getStoredData('selectedSize')?.item


const useStore = create((set) => ({
  stateProduct:{
    ...product,
      selectedVariantIndex: storedMainImageIndex ?? 0,
      selectedThumb: product.variant[0].images.thumbnails[0],
      selectedSize: storedSize || product.sizes[1],
      storeVariant: {
        name:storedVariant?.name || product.variant[0].name,
        hex: storedVariant?.hex || product.variant[0].hex,
      },
      currentMainImage: storedVariant?.images?.main[storedMainImageIndex] || product.variant[0].images.main[0],
  },


  selectVariant: (selectedVariant, index, imageType, selectedThumb) => set((state) => {
    const updatedStateProduct = {
      ...state.stateProduct,
      selectedThumb,
      selectedVariantIndex: index,
      currentMainImage:
        imageType === 'variant'
          ? selectedVariant.images.main[0]
          : selectedVariant[0].images.main[index],
    }

    if (imageType === 'variant') {
      updatedStateProduct.storeVariant = {
        ...state.stateProduct.storeVariant,
        name: selectedVariant.name,
        hex: selectedVariant.hex,
      }
    }

    return { stateProduct: updatedStateProduct }
  }),

}
))

export default useStore;