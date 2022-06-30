import './style.css'
import { CartContext } from '../../../../providers/cart'
import { useContext } from 'react'

function Card ({product}) {

    const { addToCart } = useContext(CartContext)

    return (
        <div className='card-container'>
            <img className='product-img' src={product.image} alt={product.name}/>
            <h3 className='name-product'>{product.name}</h3>
            <h4>{product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}</h4>
            <button className='btnBuy' onClick={() => addToCart(product)}>Comprar</button>
        </div>
    )
}

export default Card