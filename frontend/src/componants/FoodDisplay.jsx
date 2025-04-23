import React, { useContext } from "react";
import { storeContext } from "../context/storeContext";
import FoodItem from "./FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);
  return (
    <div class="mt-[30px]">
      <h2 class="text-[max(2vw,24px)] font-[600]">Top dishes near you</h2>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-y-[50px]">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
