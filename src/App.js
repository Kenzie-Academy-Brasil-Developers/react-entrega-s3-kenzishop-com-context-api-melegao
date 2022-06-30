import './App.css';
import { useState } from 'react';
import BodyContainer from './components/body';
import Cart from './components/cart';
import Header from './components/header';

import { CatalogueProvider } from './providers/products';
import { CartProvider } from './providers/cart';

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      <CatalogueProvider type='catalogue'>
        <CartProvider>
          <Header setShowCart={setShowCart}/>
          <BodyContainer />
          {showCart && <Cart setShowCart={setShowCart}/>}
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;