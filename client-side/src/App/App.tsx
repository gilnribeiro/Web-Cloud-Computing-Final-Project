import React, { useState, useEffect} from "react"

import FormTrips from "../Forms/formTrips";
import ListTrips from "../Lists/listTrips";
import BarChart from "../Charts/barChart";
import FormCars from "../Forms/FormCars";
import ListCars from "../Lists/ListCars";
import CarChart from "../Charts/carChart"
import { Box, List, TableFooter } from "@material-ui/core";

interface Trip {car:string, to:string, duration:number}
interface Car {car:string, driver:string}


function App() {
    const [trips, setTrips]=  useState([] as Trip[])
    const [cars, setCars]= useState([] as Car[])

    //fetch trips from server
    function loadTrips() {
        fetch("/trips")
        .then(data => data.json())
        .then(trips => setTrips(trips))
    }
    useEffect(loadTrips, [])

    //fetch cars from server
    function loadCars() {
        fetch("/cars")
        .then(data => data.json())
        .then(cars => setCars(cars))
    }
    useEffect(loadCars, [])

    const addTrip = (log:any) => {
        setTrips([...trips,log])
    }

    const addCar = (log:any) => {
        setCars([...cars, log])
    }

    return <>     
        <div>
        <header>
            <table>
            <tbody>
                <tr>
                    <td>
                        <img src='https://images.thestar.com/content/dam/thestar/news/ttc/2013/02/26/ttc_redesigns_its_bus_stops_and_station_maps/bus_logo.jpg' 
                        width="40" height="40" alt="Bus Logo"/>
                    </td>
                    <td><h1>Fast Trips Dashboard</h1></td>
                </tr>
            </tbody>
            </table>
        </header>
        </div> 
        <div style={{paddingLeft:"20px", display:"flex"}}>

            <div style={{width:"45%", display:"inline-block"}}>
                <h2>Call a Car</h2>
                <div style={{height:"150px", overflow:"auto"}}><ListTrips trip= {trips}/></div>
            </div>
            <div style={{width:"45%", display:"inline-block"}}>
                <h2>Add a Car </h2>
                <div style={{height:"150px", overflow:"auto"}}><ListCars car= {cars}/></div>
            </div>
        </div>

        <div style={{paddingLeft:"20px", display:"flex"}}>

            <div style={{width:"45%", display:"inline-block"}}>
                <FormTrips addTrip= {addTrip}/>
            </div>
            <div style={{width:"45%", display:"inline-block"}}>
                <FormCars addCar= {addCar}/>
            </div>
        </div>

        <div style={{paddingLeft:"20px", paddingTop:"20px"}}>
            <div style={{width:"45%", display:"inline-block"}}>
                <BarChart trips= {trips}/>
            </div>
            <div style={{width:"45%", display:"inline-block"}}>
                <CarChart trips= {trips}/>
            </div>

        </div>  
        <footer style={{paddingLeft: "20px"}}>
            <List>
                <strong>Project by:</strong><br></br>
                - Matteo Matera 41596<br></br>
                - João Gil Ribeiro 32399<br></br>
                - Diogo Baltazar 29134
            </List>
        </footer>

            
    </>
}

export default App;