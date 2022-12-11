export interface ICategories {
    id: number;
    title: string;
}

export interface INewCategory {
    title: string;
}


export class IncomeStore {
    categories: ICategories[]

    constructor() {
        this.categories = [{id: 0, title: 'coffee shop'}];
    }

    getAllCategories() {
        return this.categories;
    }

    setNewCategory(body: INewCategory) {
        this.categories.push({id: this.categories.length, title: body.title})
    }
}

export const incomeStore = new IncomeStore()