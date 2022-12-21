import React from 'react';
import {ICategoriesData } from '../../../../common/services/income.services'
import './categories.css';

interface IProps {
    categories: ICategoriesData;
    onCategoryClick: (id: number) => void;
}

export function Categories({ categories, onCategoryClick }: IProps) {

    return (
        <div className='wrapper-categories'>
            <h3>Your Categories</h3>
            <ul className='income-categories-list'>

                {Object.keys(categories).map(key => {
                    return (
                        <li
                        key={categories[key].id}
                        onClick={() => onCategoryClick(categories[key].id)}
                    >
                        {categories[key].title}
                        <span className='categories-amount'>{categories[key].amount}</span>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}