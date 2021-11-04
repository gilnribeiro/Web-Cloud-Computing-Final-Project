import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

//object Car
interface Car {car:string, driver:string}
//initial Car
let cars= [ 
            {car:"LM-L9-77", driver:"Leonardo"},
            {car:"AS-32-A3", driver:"Rui"},
            {car:"XS-64-OL", driver:"Diogo"}
          ]

@Controller('cars')
export class CarsController {

    // New Stuff
    privatereadonly: any; car: Car[] = cars

    @Get()
    getAllCars(): Car[] {
        return cars
    }

    @Post()
    createNewCar(@Body() car: Car): void {
        cars.push(car)
    }

    @Put()
    updateDriver(@Body() car: Car): void{
        const matr = cars.map( c => c.car).indexOf(car.car)
        if  (matr === -1) {
            cars.push(car)
        } else {
            // cars[matr].driver = car.driver
            cars[matr] = car
        }
    }  
}
