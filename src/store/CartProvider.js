import { useState } from "react";
import CartContext from "./cart-context";

const items = [];

const CartProvider = (props) => {
  const [cartState, SetCartState] = useState(items);
  
  const addMealToCart = (item)=> {
  const existingCartItemIndex = cartState.findIndex(
    (cartitem) => cartitem.id === item.id
  );
  const existingCartItem = cartState[existingCartItemIndex];
  let updatedItems;
  if (existingCartItem) {
  const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + 1,
    };
    updatedItems = [...cartState];
    updatedItems[existingCartItemIndex] = updatedItem;
  SetCartState(updatedItems)
  }else{
    SetCartState((preState) => {
      return [item, ...preState];
    });
  }
}

  const removeMealFromCart = (id) => {
    const existingItem = cartState[id];
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = cartState.filter(item => item.id !== id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...cartState];
      updatedItems[id] = updatedItem;
    }
    SetCartState(updatedItems)
  };

  const cartContext = {
    items: cartState,
    totalAmount: 0,
    addItem: addMealToCart,
    removeItem: removeMealFromCart,
   
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
