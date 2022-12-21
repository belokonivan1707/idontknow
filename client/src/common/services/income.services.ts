
export interface ICategory {
    id: number;
    title: string;
    amount?: number;
}

export type ICategoriesData = Record<string, ICategory>

interface INewExpense {
    categoryID: number;
    sum: number;
}

export interface INewCategory {
    category: string,
};




class IncomeService {
    async getAllCategories(): Promise<ICategoriesData> {
        const response = await fetch('http://localhost:8000/income/categories')
        return await response.json();
    }

    async submitNewCategory({ category }: INewCategory): Promise<ICategoriesData> {
        const response = await fetch('http://localhost:8000/income/new-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: category })
        });
        return await response.json();
    }

    async submitExpense({ categoryID, sum }: INewExpense): Promise<ICategoriesData> {
        const response = await fetch('http://localhost:8000/income/new-expense', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: categoryID, amount: sum })
        });
        return await response.json();
    }

}

export const incomeService = new IncomeService();