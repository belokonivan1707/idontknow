import React from 'react';
import { ICategories } from '../../../../common/services/income.services'

interface IProps {
    categories: ICategories[] | null;
    onCategoryClick: (id: number) => void;
}

export function Categories({ categories, onCategoryClick }: IProps) {

    return (
        <div className='wrapper-categories'>
            <h3>Your Categories</h3>
            <ul className='income-categories-list'>
                {categories && categories.map(({ id, title }: ICategories) => {
                    return (
                        <li
                            key={id}
                            onClick={() => onCategoryClick(id)}
                        >
                            {title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}