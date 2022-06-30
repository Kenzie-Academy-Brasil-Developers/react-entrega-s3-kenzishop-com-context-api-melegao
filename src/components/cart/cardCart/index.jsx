import './style.css'
import { useContext } from 'react';
import { CartContext } from '../../../providers/cart';

function CardCart ({product}) {

    const { removeFromCart } = useContext(CartContext)

return (
    <div className="cardCart">
        <img className="imgCart" src={product.image} alt={product.name}/>
        <div className="cardContent">
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString('pr-BR', {
                style: 'currency',
                currency: 'BRL'
            })}</p>
            <button onClick={() => removeFromCart(product)}>Remover</button>
        </div>
    </div>
)
}

export default CardCart