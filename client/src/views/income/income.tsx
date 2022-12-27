import React from 'react';
import { useForm } from 'react-hook-form';
import { incomeService, ICategoriesData, INewCategory } from '../../common/services/income.services';
import { Categories } from './components/categories/categories';
import { Keyboard } from './components/keyboard/keyboard';
import './income.css'

export function Income() {
    const { register, handleSubmit, reset } = useForm<INewCategory>();
    const [amount, setAmount] = React.useState<string>('')
    const [categories, setCategories] = React.useState<ICategoriesData | null>(null)

    React.useEffect(() => {
        incomeService.getAllCategories()
            .then(result => setCategories(result))
    }, [])


    function onSubmitNewCategory({ category }: INewCategory) {
        incomeService.submitNewCategory({ category })
            .then(result => {
                setCategories(result);
                reset();
            })
    }

    function onCategoryClick(categoryID: number) {
        const sum = Math.round(Number(amount) * 100) / 100;

        if (!isNaN(sum)) {
            incomeService.submitExpense({ categoryID, sum }).then(result => {
                setCategories(result);
            })
        }
    }


    return (
        <div className='wrapper-income'>
            <Keyboard amount={amount} setAmount={setAmount} />

            {categories && <Categories categories={categories} onCategoryClick={onCategoryClick} />}

            <form onSubmit={handleSubmit(onSubmitNewCategory)} className="form-income">
                <div className='income-input-box'>
                    <label>create new category</label>
                    <input type="text" placeholder='new catogory' {...register("category")} />
                </div>
                <button type="submit">Add New Category</button>
            </form>
        </div>
    )
}