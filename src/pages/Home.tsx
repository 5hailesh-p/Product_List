import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import type { Product } from "../types/Product";
import { FilterProducts } from "../components/FilterProducts";
import { ProductGrid } from "../components/ProductGrid";
import { ProductContext } from "../context/ProductContext";
import { limit, fetchLimit} from "../constant/ProductConstants";

const ProductList = () => {
    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [error, setError] = useState<string | boolean | null>(false)
    const [loading, setLoading] = useState<boolean>(true)

    const [allCategory, setAllCategory] = useState<string[]>([])
    const [displayProduct, setDisplayProduct] = useState<Product[]>([]);

    // const [page, setPage] = useState<number>(1)
    // const [totalPages, setTotalPages] = useState<number>(fetchLimit)
    // const offSet = (page - 1) * limit


    useEffect(() => {

        fetch(`https://dummyjson.com/products?limit=${fetchLimit * limit}`)
            .then(res => res.json())
            .then(data => setAllProducts(data.products))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {

        let allcats = new Set<string>();
        allProducts.map((i) => allcats.add(i.category))
        setAllCategory([...allcats])

    }, [allProducts])



    if (loading) return <p> Loading...</p>
    if (error) return <p> Some this went Wrong</p>

    return (
        <>
            <ProductContext.Provider value={allProducts}>
                <Container>

                    <div className="text-center my-5">
                        <h2 className="fw-bold">Product List</h2>
                        <p>Browse our complete collection of available products with detailed information and pricing.
                        </p>
                    </div>
                    <FilterProducts
                        allCategory={allCategory}
                        setDisplayProduct={setDisplayProduct}
                    />



                    <ProductGrid displayProduct={displayProduct} />


                </Container>






                

            </ProductContext.Provider>
        </>
    )
}

export default ProductList