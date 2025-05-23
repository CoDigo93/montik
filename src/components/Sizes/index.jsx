import React, { useState, Children } from 'react';
import product from '../../product';
import clsx from 'clsx';
import { setDataToStorage, getStoredData } from '../../utils/storage';
import useStore from '../../store';

function Sizes() {
  const {stateProduct} = useStore()
  const storedSize = getStoredData('selectedSize')?.item
  const [selectedSize, setSelectedSize] = useState(stateProduct?.selectedSize)

  console.log(storedSize)

  const handleSizeSelection = (size) => {
    setSelectedSize(size)
    setDataToStorage('selectedSize', size)
  }

  console.log(storedSize)

  return (
    <section className='flex mt-2 gap-2'>
      {Children.toArray(
        product.sizes.map(size => (
          <div
            className={
              clsx('w-16 h-12 border-1 border-[#f5f5f5] flex text-xs font-thin items-center justify-center cursor-pointer hover:border-[#FFE400] duration-300',{
              ['!border-[#FFE400] bg-[#FFE400] text-[#fff] !font-[900]']: selectedSize ? selectedSize === size : storedSize === size,
            })}
            onClick={() => handleSizeSelection(size)}


          >{size}</div>
        ))
      )}
    </section>
  );
}

export default Sizes;