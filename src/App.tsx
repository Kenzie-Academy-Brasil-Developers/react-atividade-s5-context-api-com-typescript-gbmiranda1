import React from 'react';
import Produtos from './components/Produtos';
import './App.css';
import Cart from './components/Cart';
import { CartProvider } from './Providers/Cart';

function App() {
  return (
    <div>
      <CartProvider>
        <Produtos></Produtos>
        <Cart></Cart>
      </CartProvider>
    </div>
  );
}

export default App;
