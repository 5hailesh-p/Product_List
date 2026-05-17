import { Button, Carousel, Col, Container, Row } from "react-bootstrap"
import Header from "../components/Header"
import { Link } from "react-router"


const Home = () => {
    return (
        <>
            <Header />

            <Carousel fade>
                <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1674027392887-751d6396b710" className="img-fluid c-img" loading="lazy" alt="First slide" />

                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1487014679447-9f8336841d58" className="img-fluid c-img" loading="lazy" alt="Second slide" />

                </Carousel.Item>

            </Carousel>

            <Container className="mb-5">
                <div className="text-center my-5">
                    <h2 className="fw-bold">About Us</h2>
                    <p>Browse our complete collection of available products with detailed information and pricing.</p>
                </div>

                <Row className='g-5 align-items-center'>
                    <Col xs={12} lg={4} md={5} sm={12} >
                        <div className='text-center shadow-lg'  data-aos="fade-up" data-aos-delay={100}>
                            <img src="https://images.unsplash.com/photo-1499096382193-ebb232527fee" loading="lazy" className='img-fluid' alt="img" />

                        </div>
                    </Col>
                    <Col xs={12} lg={8} md={7} sm={12} >
                        <div className="text-md-start text-center" data-aos="fade-up" data-aos-delay={200}>



                            <h2 className='fw-bold my-3'>
                                Discover our Best Products for Your Lifestyle
                            </h2>

                            <div className="d-flex justify-content-between align-items-center">
                                <span className='fw-bold text-success fs-3'>
                                    Trending Products
                                </span>
                            </div>

                            <p className="text-secondary my-2 product-desc">
                                Explore a wide range of high-quality electronics, accessories,
                                fashion items, and everyday essentials — all in one place.
                                Filter, search, and compare products easily with a smooth
                                shopping experience.
                            </p>

                            <h6 className='fw-bold mt-4'>
                                About Site
                            </h6>

                            <p className="text-secondary my-2">
                                Our platform is designed to help users discover top-rated
                                products quickly and efficiently. With powerful filtering,
                                sorting, and responsive design, you can browse products
                                seamlessly across all devices.
                            </p>
                            <Link to="/products">
                                <Button variant="outline-success">
                                    Explore More
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Home