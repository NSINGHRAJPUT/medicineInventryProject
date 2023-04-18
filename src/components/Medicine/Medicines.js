import { useContext } from "react";
import MedicineList from "./MedicineList";
import "./Medicines.css";
import CartContext from "../../store/cart-context";



const Meals = (props) => {
  const cartCtx=useContext(CartContext)
  return (
    <ul className="meals">
      {cartCtx.medicines.map((meal) => (
        <MedicineList
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
};

export default Meals;
