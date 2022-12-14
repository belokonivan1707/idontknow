import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { incomeStore, ICategories } from 'src/store/income-store';

@Injectable()
export class IncomeService {
    getAllCategories() {
        return incomeStore.getAllCategories()
    }

    postNewCategory(request, response) {
        return response;
    }

    postNewExpense(request, response) {
        return response;
    }
}
