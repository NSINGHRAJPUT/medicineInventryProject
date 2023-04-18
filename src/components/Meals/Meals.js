import MealList from "./MealList";
import "./Meals.css";

const MEDICINES = 
  [{
        id:1,
        name:'Alergin Tablet',
        description:'tablets For alergy',
        price:34
    },
    {
        id:2,
        name:'Pracetamol Tablet',
        description:'tablets For fever',
        price:20
    },
    {
        id:3,
        name:'Desprin Tablet',
        description:'tablets For Headache',
        price:10
    },
    {
        id:4,
        name:'Anesthescia',
        description:'for servre wound',
        price:340
    },
    {
        id:5,
        name:'Insulin',
        description:'for Diabities',
        price:440
    }]

const Meals = (props) => {
  return (
    <ul className="meals">
      {MEDICINES.map((meal) => (
        <MealList
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
