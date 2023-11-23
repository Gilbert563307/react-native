import React from 'react'
import ProductsController from './ProductsController';
import Router from "./Router";

export default function MainController({ children }) {
  return (
    <ProductsController>
      <Router>{children}</Router>
    </ProductsController>
  )
}

