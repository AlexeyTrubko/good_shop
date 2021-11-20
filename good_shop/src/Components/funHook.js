import React from "react";
import { useSelector } from "react-redux";
import { Selectors } from "../store";

export default function FunHook() {
  //   3. принять стору
  const house = useSelector(Selectors.getHouse);
  const books = useSelector(Selectors.getBooks);
  const food = useSelector(Selectors.getFood);

  return (
    <div className="App">
      dfdf
      <ul>
        {house.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        {books.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        {food.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        
      </ul>
    </div>
  );
}
