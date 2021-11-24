import React from "react";
import { goodsCategory } from "../CategoryData/CategoryData";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function ProductPage() {
    return (
        <div style={{ width: 256 }}>
            {goodsCategory.map((goodsCategory)=>(
                <Menu.Item key={goodsCategory.id}>
                    <li>
                    <Link to="/goodsCategory"> {goodsCategory.items}</Link>
                    </li>
                </Menu.Item>
            ))}
        </div>
    )
}