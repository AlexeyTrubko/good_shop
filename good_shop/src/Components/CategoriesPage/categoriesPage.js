import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { StoreSelectors } from "store";
import  {MyCard}  from "../Card";





export default function CategoryPage () {
  const goodsCategory = useSelector(StoreSelectors.getGoodsCategory);
  const { type } = useParams();
  const thisType = goodsCategory.find((el => el.category.type === type));

  if (!thisType) {
    return <span> Категория не найдена, вернуться назад </span>
  }
  return (
    <div>
      {thisType.items.map((item) => (
        <MyCard  id={item.id} label={item.label} price={item.price} img={item.img} category_type={item.category_type}></MyCard>
      ))}
    </div>
      
  )
};