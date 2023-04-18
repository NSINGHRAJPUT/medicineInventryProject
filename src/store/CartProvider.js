import { useState } from "react";
import CartContext from "./cart-context";

const items = [];
const MEDICINES = 
  [{
        id:'m1',
        name:'Alergin Tablet',
        description:'tablets For alergy',
        price:34
    },
    {
        id:'m2',
        name:'Pracetamol Tablet',
        description:'tablets For fever',
        price:20
    },
    {
        id:'m3',
        name:'Desprin Tablet',
        description:'tablets For Headache',
        price:10
    },
    {
        id:'m4',
        name:'Anesthescia',
        description:'for servre wound',
        price:340
    },
    {
        id:'m5',
        name:'Insulin',
        description:'for Diabities',
        price:440
    }]

const CartProvider = (props) => {
  const [cartState, SetCartState] = useState(items);
  const [medState,setMedState]=useState(MEDICINES)

  const addMedicine = (obj)=>{
    setMedState((pre)=>{return [obj,...pre]})
  }
  
  const addMedicineToCart = (item)=> {
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

  const removeMedicineFromCart = (id) => {
    const existingCartItemIndex = cartState.findIndex(
      (item) => item.id === id
    );
    const existingItem = cartState[existingCartItemIndex];
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = cartState.filter(item => item.id !== id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...cartState];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    SetCartState(updatedItems)
  };

  const cartContext = {
    items: cartState,
    totalAmount: 0,
    addItem: addMedicineToCart,
    removeItem: removeMedicineFromCart,
    addList:addMedicine,
    medicines:medState
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
