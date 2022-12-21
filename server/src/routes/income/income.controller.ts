import { Controller, Get, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import {IncomeService} from './income.service';
import {incomeStore, INewCategory, INewExpense} from '../../store/income-store';

@Controller('income')
export class IncomeController {
  constructor(private readonly IncomeService: IncomeService) { }

  @Get('categories')
  getAllCategories() {
    return this.IncomeService.getAllCategories();
  };

  @Post('new-category')
  postNewCategory(@Body() body: INewCategory) {
    incomeStore.setNewCategory(body);

    return incomeStore.getAllCategories();
  }

  @Post('new-expense')
  postNewExpense(@Body() body: INewExpense) {
    incomeStore.setNewExpense(body);

    return incomeStore.getAllCategories();
  }
}
