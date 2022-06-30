import "./style.css"
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Header ({setShowCart}) {

    const { cartItens } = useContext(CartContext)


    return (
        <div className="header">
            <h1 className="logo">Palmeiras Store</h1>
            <div className="header-cart-container">
                <h3 className="header-cart" onClick={() => setShowCart(true)}>Carrinho</h3>
                <p className="header-cart-itens">{cartItens.length}</p>
            </div>
        </div>
    )
}

export default Header