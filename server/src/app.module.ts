import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeController } from './routes/income/income.controller';
import { IncomeService } from './routes/income/income.service';

@Module({
  imports: [],
  controllers: [AppController, IncomeController],
  providers: [AppService, IncomeService],
})

export class AppModule {}
