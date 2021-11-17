import React from 'react';
import { Card } from 'antd';

const good = [
{ 
id: 1,
category_type: 'house',
label: 'Коврик',
price: 99,
img: 'https://source.unsplash.com/random'
 },
 { 
    id: 2,
    category_type: 'books',
    label: 'Гарри Поттер 10',
    price: 99,
    img: 'https://s5-images.ozstatic.by/banner/1400/939/9/9939_2.jpg'
     },
]

const { Meta } = Card;

export default class MyCard extends React.Component {
   render() {
    return (
<Card
    hoverable
    style={{ width: 240 }}
    
  >
      {good.map((good) => (
        <Meta key={good.id}
         label={good.label}
         category_type={good.category_type}
         price={good.price} 
         img={good.img}/>
      ))}
    
  </Card>
        )
   }
   
}

  
  
