import { useState } from "react";
import Header from "./components/Layout/Header";
import MedicineInputForm from './components/MedicineInputForm/MedicineInputForm'
import Medicines from "./components/Medicine/Medicines";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartVisibleHandler = () => {
    setCartVisible(true);
  };

  const cartHideHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onCloseCart={cartHideHandler} />}
      <Header onCartClick={cartVisibleHandler} />
      <MedicineInputForm />
      <Medicines />
    </CartProvider>
  );
}

export default App;
