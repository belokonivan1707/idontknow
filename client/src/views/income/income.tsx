import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './income.css'

interface FormData {
    category: string,
};

interface Categories {
    id: number;
    title: string;
}

export function Income() {
    const [categories, setCategories] = React.useState<Categories[] | null>(null)
    
    const { register, handleSubmit, reset } = useForm<FormData>();

    useEffect(() => {
        fetch('http://localhost:8000/income/categories')
            .then(response => response.json())
            .then(result => setCategories(result))
    }, [])


    function onSubmitNewCategory({ category }: FormData) {
        fetch('http://localhost:8000/income/new-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: category })
        })
            .then(response => response.json())
            .then(result => {
                setCategories(result);
                reset()
            })
    }

    function onCategoryClick(categoryID: number) {
        console.log('categoryID', categoryID);
    }

    return (
        <div className='wrapper-income'>
            <form onSubmit={handleSubmit(onSubmitNewCategory)} className="form-income">
                <div className='income-input-box'>
                    <label>create new category</label>
                    <input type="text" placeholder='new catogory' {...register("category")} />
                </div>
                <button type="submit">Add New Category</button>
            </form>

            <div>
                <h3>Your Categories</h3>
                <ul className='income-categories-list'>
                    {categories && categories.map(({ id, title }: Categories) => {
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
        </div>
    )
}