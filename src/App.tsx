import './App.css'
import Products from './pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ProductDetails } from './pages/ProductDetails';
import { ProductContext } from './context/ProductContext';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Api, fetchLimit, limit } from './constant/ProductConstants';
import type { Product } from './types/Product';
import AOS from "aos";
import Home from './pages/Home';
import { Spinner } from 'react-bootstrap';
function App() {

  const [allProducts, setAllProducts] = useState<Product[]>([])
  // const [allCategory, setAllCategory] = useState<string[]>([])

  const [error, setError] = useState<string | boolean | null>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchProduct = useCallback(() => {

    fetch(`${Api}?limit=${fetchLimit * limit}`)
      .then(res => res.json())
      .then(data => setAllProducts(data.products))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [limit, fetchLimit])


  const allCategory = useMemo(() => {
    return [... new Set(allProducts.map((p) => p.category))]

  }, [allProducts])


  useEffect(() => {

    fetchProduct();

  }, [fetchProduct])


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  if (loading) return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
  if (error) return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <p> Some this went Wrong</p>

    </div>


  )

  return (
    <>
      <ProductContext.Provider value={allProducts}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products allCategory={allCategory} />} />
            <Route path='/products/:id' element={<ProductDetails />} />
          </Routes>

        </BrowserRouter>
      </ProductContext.Provider>
    </>
  )
}

export default App
