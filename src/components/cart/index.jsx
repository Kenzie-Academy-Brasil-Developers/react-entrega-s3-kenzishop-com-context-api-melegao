import './style.css'
import CardCart from "./cardCart";
import { useContext } from 'react';
import { CartContext } from '../../providers/cart';


function Cart ({setShowCart}) {

    const { cartItens } = useContext(CartContext)

    return (
        <div className="cartContainer">
            <div className="cartHeader">
                <h3 className="cartTitle">Carrinho</h3>
                <p className="cartClose" onClick={() => setShowCart(false)}>X</p>
            </div>
            <div className="cartContent">
                {cartItens.map((elem, index) => <CardCart key={index} product={elem}/>)}
            </div>
        </div>
    )
}

export default Cart