import React from 'react'
import Catalog from '../catalog/catalog'
import Navbar from '../componenets/navbar'
import Search from '../componenets/search/search'
import Products from '../products/products'
import Scanner from '../scanner/scanner'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Catalog/>
      <Scanner/>
      <Products/>
    </div>
  )
}
