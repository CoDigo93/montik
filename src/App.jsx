//import { useState } from 'react'
import './App.css'
import ProductImage from './components/ProductImage'
import ProductDetails from './components/ProductDetails'
import Thumbnails from './components/Thumbnails'
import Header from './components/Header'


function App() {


  return (
    <>
      <Header/>
      <section className='grid lg:grid-cols-[repeat(2,_35vw)] md:grid-cols-1 lg:grid-rows-3 sm:grid-rows[314px] gap-8 mx-auto lg:w-[99vw] lg:px-64 px-6 justify-items-center lg:justify-items-normal sm:w-[425px] md:w-[425px]'>

        <ProductImage/>
        <ProductDetails/>
        <Thumbnails/>
      </section>
    </>
  )
}

export default App
