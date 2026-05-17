import { useState } from "react";
import { Container } from "react-bootstrap";
import type { Product } from "../types/Product";
import { FilterProducts } from "../components/FilterProducts";
import { ProductGrid } from "../components/ProductGrid";
import Header from "../components/Header";


interface Props {
    allCategory: string[];
}
const ProductList = ({ allCategory }: Props) => {

    const [displayProduct, setDisplayProduct] = useState<Product[]>([])

    return (
        <>
            <Header />
            <Container>

                <div className="text-center my-5">
                    <h2 className="fw-bold">Product List</h2>
                    <p>Browse our complete collection of available products with detailed information and pricing.
                    </p>
                </div>
                <FilterProducts allCategory={allCategory} setDisplayProduct={setDisplayProduct} />

                <ProductGrid displayProduct={displayProduct} />

            </Container>

        </>
    )
}


export default ProductList

