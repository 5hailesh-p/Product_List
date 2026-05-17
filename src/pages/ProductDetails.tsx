import { useParams } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'
import { useContext, } from 'react'
import { ProductContext } from '../context/ProductContext'
import { currency } from '../constant/ProductConstants'
import Header from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'


export const ProductDetails = () => {
    const allproducts = useContext(ProductContext)
    const { id } = useParams()
    const product = allproducts.find((i) => i.id == Number(id))

    const moreProduct = allproducts.filter((p) => product?.category.includes(p.category))

    return (

        <>
            <Header />
            <Container>
                <div className="text-center my-5">
                    <h2 className="fw-bold">Product Details</h2>
                    <p>Browse our complete collection of available products with detailed information and pricing.</p>
                </div>

                <Row className='g-5'>
                    <Col xs md={6} >
                        <div className='text-center shadow-lg'>
                            <img src={product?.thumbnail} className='img-fluid' alt={product?.title} />

                        </div>
                    </Col>
                    <Col xs md={6} >
                        <div className="text-md-start text-center">
                            <span className='badge bg-success fw-normal fs-6 text-capitalize mb-2'>
                                {product?.category}
                            </span>
                            <h2 className='fw-bold my-3'>{product?.title}</h2>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className='fw-bold text-success fs-3  '>{currency} {product?.price}</span>
                                <span className="d-flex align-items-center">
                                    {[...Array(5)].map((_, i) =>
                                        i <= Math.round(Number(product?.rating)) ?
                                            (<i className="bi bi-star-fill small text-warning" key={i}></i>) :
                                            (<i className="bi bi-star small text-warning" key={i}></i>)
                                    )}
                                    <span className='ms-2'><b> Rating: </b>{product?.rating}</span>
                                </span>
                            </div>
                            <p className="text-secondary my-2 product-desc text-nowrap">{product?.description}</p>
                            <h6 className='fw-bold mt-4'>About Product</h6>
                            <p className="text-secondary my-2">{product?.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className=" my-5">
                    <h2 className="fw-bold">More Similar Products</h2>
                    <p>Browse our complete collection of available products with detailed information and pricing.</p>
                </div>


                <ProductGrid displayProduct={moreProduct} />

            </Container>


        </>
    )
}
