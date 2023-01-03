export interface IWriter {
    title: string;
}


export class IncomeStore {
    writers: IWriter[]

    constructor() {
        this.writers = [];
    }


    getAllCategories() {
        return this.writers;
    }
}

export const incomeStore = new IncomeStore()