import { v4 as uuidv4 } from 'uuid';

export interface ICategories {
    id: number;
    title: string;
    amount: number;
}

export interface INewCategory {
    title: string;
}

export interface INewExpense {
    id: string;
    amount: number;
}

type CategoriesStore = Record<string, ICategories>

export class IncomeStore {
    categories: CategoriesStore

    constructor() {
        this.categories = {};
    }

    defaultValues() {
        for (let i = 0; i < 1; i++) {
            const id = uuidv4();
            this.categories[id] = {id, title: 'coffee-shops', amount: 0}
        }
    }

    getAllCategories() {
        return this.categories;
    }

    setNewCategory({title}: INewCategory) {
        const id = uuidv4();
        this.categories[id] = {id, title, amount: 0}
    }

    setNewExpense({id, amount}: INewExpense) {
        this.categories[id].amount = this.categories[id].amount + amount;
    }
}

export const incomeStore = new IncomeStore()