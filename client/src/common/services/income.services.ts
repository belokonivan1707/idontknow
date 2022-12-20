export interface FormData {
    category: string,
};

export interface ICategories {
    id: number;
    title: string;
}


class IncomeService {
    async getAllCategories(): Promise<ICategories[]> {
        const response = await fetch('http://localhost:8000/income/categories')
        return await response.json();
    }

    async submitNewCategory({ category }: FormData): Promise<ICategories[]> {
        const response = await fetch('http://localhost:8000/income/new-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: category })
        });
        return await response.json();
    }

}

export const incomeService = new IncomeService();