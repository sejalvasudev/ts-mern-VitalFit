import { Col, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'

export default function HomePage() {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
            <Link to={'/product/' + product.slug}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
            </Link>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Rs.{product.price}</Card.Text>
              <Link to={'/product/' + product.slug}>
                <Button variant="primary">View Product</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}