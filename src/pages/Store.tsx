import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import { productService } from "../services/productService";
import { StoreItem } from "../components/StoreItem";


export function Store() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    productService.getAllProducts()
      .then(setProducts)
      .catch(console.error)
  }, [])

  return (
    <>
      <h1>Store Page</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <StoreItem 
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}