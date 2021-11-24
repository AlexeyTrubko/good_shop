import React from 'react';
import { Card } from 'antd';
import { good } from '../CategoryData/CategoryData';



export default function MyCard()  {
  
    return (
      <div style={{display: 'flex'}}>
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

    
