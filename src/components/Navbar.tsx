import { Navbar as NavbarBS, Container, Nav, Button } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa";

export function Navbar() {
    return (
        <NavbarBS className="bg-white shadow-sm mb-3">
            <Container> 
                <Nav className="me-auto">
                    <Nav.Link href = "/"> Home</Nav.Link>
                    <Nav.Link href = "/store"> Store</Nav.Link>
                    <Nav.Link href = "/about"> About</Nav.Link>
                </Nav>
               <Button
                style={{width: "3rem,", height :"3rem", position: "relative"}}
                className="rounded-circle"
                variant="outline-primary"
               >
                 <FaShoppingCart 
                    size = "1.5em"
                    color="#1E90FF"
                />
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom : 0,
                        right: 0,
                        transform: "translate(25%, 25%)"
                    }}
                >
                3
                </div>
               </Button>
            </Container>
        </NavbarBS>
    )
}