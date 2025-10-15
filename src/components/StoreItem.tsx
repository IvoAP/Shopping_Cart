import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
  id: number
  title: string
  price: number
  image: string
  category: string
}

export function StoreItem({ id, title, price, image, category }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
          <span className="fs-6">{title}</span>
        </Card.Title>
        <Card.Text className="text-muted small">{category}</Card.Text>
        <Card.Text className="fw-bold fs-5 mb-3">${price.toFixed(2)}</Card.Text>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button 
              className="w-100" 
              onClick={() => increaseCartQuantity(id)}
            >
              + Adicionar ao Carrinho
            </Button>
          ) : (
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Button 
                  variant="outline-primary" 
                  size="sm"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div className="fs-5">
                  <span className="fw-bold">{quantity}</span> no carrinho
                </div>
                <Button 
                  variant="outline-primary" 
                  size="sm"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button 
                variant="danger" 
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                🗑️ Remover
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
