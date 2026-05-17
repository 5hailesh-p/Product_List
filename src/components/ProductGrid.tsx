import { Col, Pagination, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import type { Product } from '../types/Product'
import { useState } from 'react';
import { limit } from '../constant/ProductConstants';

interface Props {
    displayProduct: Product[];
}
export const ProductGrid = ({ displayProduct }: Props) => {
    const [page, setPage] = useState<number>(1)
    const totalPages = Math.max(Math.round(displayProduct.length / limit), 1)
    const offSet = (page - 1) * limit


    return (
        <>
            <Row className="g-3 align-items-stretchS">
                {displayProduct.slice(offSet, offSet + limit).map((item,index) => (
                    <Col xs={6} lg={3} md={4} sm={6} key={item.id} data-aos="fade-up" data-aos-delay={index*50}>
                        <ProductCard item={item} />
                    </Col>
                ))}

            </Row>
            <Pagination className='float-md-end my-2 justify-content-center'>
                <Pagination.First onClick={() => setPage(1)} />
                <Pagination.Prev onClick={() => setPage(Math.max(page - 1, 1))} />

                <Pagination.Item active >{page}</Pagination.Item>


                <Pagination.Next onClick={() => setPage(Math.min(page + 1, totalPages))} />
                <Pagination.Last onClick={() => setPage(totalPages)} />
            </Pagination>
        </>

    )
}
