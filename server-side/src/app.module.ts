import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripsController } from './trips/trips.controller';
import { CarsController } from './cars/cars.controller';

@Module({
  imports: [],
  controllers: [AppController, TripsController, CarsController],
  providers: [AppService],
})
export class AppModule {}
