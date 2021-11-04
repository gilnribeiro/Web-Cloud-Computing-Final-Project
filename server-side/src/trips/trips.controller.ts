import { Controller, Get, Post, Body } from '@nestjs/common';

//object Trip
interface Trip {car:string, to:string, duration:number}
//initial trip
let trips= [
            {car:"MF-88-S8", to:"Milano", duration:22},
            {car:"AS-32-A3", to:"Milano", duration:13},
            {car:"XS-64-OL", to:"Napoles", duration:32}
        ]

@Controller('trips')
export class TripsController {

    @Get()
    getAllTrips(): Trip[] {
        return trips
    }

    @Post()
    createNewTask(@Body() trip: Trip): void {
        //@Body indicates that nest should retrieve an object of type Task from the body of the request
        trips.push(trip)
    }
}

