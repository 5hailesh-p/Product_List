import { Badge, Card } from "react-bootstrap"
import { currency } from "../constant/ProductConstants"
import type { Product } from "../types/Product"
import { Link } from "react-router"
interface ProductCardProps {
    item: Product
}
const ProductCard = ({ item }: ProductCardProps) => {

    return (
        <Card className="h-100 position-relative text-decoration-none" as={Link} to={`/products/${item.id}`}>
            <Card.Img variant="top" src={item.thumbnail} loading="lazy" alt={item.title} />
            <Card.Body>
                <Card.Title className="text-dark">{item.title}</Card.Title>
                <Card.Title className="fw-bold text-success">{currency}   {item.price}
                    <div className="my-2 text-dark  small d-flex gap-1" >
                        {[...Array(5)].map((_, i) =>
                            i <= Math.round(item.rating) ?
                                (<i className="bi bi-star-fill small text-warning" key={i}></i>) :
                                (<i className="bi bi-star small text-warning" key={i}></i>)
                        )}
                    </div>
                </Card.Title>
                <Card.Text className="product-desc text-nowrap">
                    {item.description}
                </Card.Text>
            </Card.Body>
            <Badge className="cat-badge text-dark" bg="warning">{item.category}</Badge>
        </Card>
    )
}

export default ProductCard