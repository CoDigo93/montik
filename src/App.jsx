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
      <section className='grid lg:grid-cols-[repeat(2,_35vw)] md:grid-cols-1  grid-rows-3 gap-8 mx-auto w-[100vw] lg:px-24 md:p-0 lg:px-64'>

        <ProductImage/>
        <ProductDetails/>
        <Thumbnails/>
      </section>
    </>
  )
}

export default App
