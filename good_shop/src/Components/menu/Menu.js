import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { categories } from '../CategoryData/CategoryData';



export default function MeMenu() {
 
    return (
      <div style={{ width: 256 }}>
        <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
          {categories.map((categories) => (
            <Menu.Item key={categories.id}>
              <li>
                <Link to="/Categories">{categories.label}</Link>
              </li>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }


