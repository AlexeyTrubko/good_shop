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
    img: 'https://source.unsplash.com/random'
     },
]



export default class MyCard extends React.Component {
  render() {
    return (
      <div>
        {good.map((good) => (
          <Card
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={good.img}
              />
            }
            key={good.id}
            title={good.category_type}
            description={good.price}
            label ={good.label}
          />
        ))}
      </div>
    );
  }
}
    
