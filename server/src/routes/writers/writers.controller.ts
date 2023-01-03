import { Controller, Get, Post, Body } from '@nestjs/common';
import { WritersService } from './writers.service'
// import {incomeStore, INewCategory, INewExpense} from '../../store/income-store';

@Controller('writers')
export class WritersController {
    constructor(private readonly WritersService: WritersService) { }

    @Get('')
    getAllCategories() {
        return this.WritersService.getAllWriters();
    };
}
