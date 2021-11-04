import { Button, TextField, List, ListItem, ListItemText, ListItemIcon, Checkbox, Container } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import React from 'react';
import { useState } from 'react';

interface Car {car:string, driver:string}

function FormCars({addCar}:any) {
const [car, setcar] = useState("");
const [driver, setdriver] = useState("");

//post new car to server
function createCar(car:Car) {
    fetch("/cars", {
        method: "POST", headers: {
            "content-type":"application/json;charset=UTF-8",
        },
        body: JSON.stringify(car)})
    .then(data => console.log(data))
}

// New Stuff
function updateDriver(car:Car) {
    fetch("/cars", {
        method: "PUT", headers: {
            "content-type":"application/json;charset=UTF-8",
        },
        body: JSON.stringify(car)})
    .then(data => console.log(data))
}

// New Stuff
const submit= (e:any) => {
    e.preventDefault()
    let new_car= {car:car, driver:driver}
    addCar(new_car)
    // We are not using the POST anymore
    // createCar(new_car)

    // New stuff
    updateDriver(new_car)           
    // New stuff
    setcar("")
    setdriver("")
}


return <div>

    {/* <ul><label>Driver </label><input type="text" onChange={e => setdriver(e.target.value)} value={driver}></input></ul> */}
    {/* <ul><label>Car Identification </label><input type="text" onChange={e => setcar(e.target.value)} value={car}></input></ul> */}
    {/* <ul><input type="submit" value="Call Car To Location" onClick={e => { submit(e) }}></input></ul> */}
    <Container>
    <TextField label="Driver" onChange={e => setdriver(e.target.value)} value={driver}></TextField><br></br>
    <TextField label="Car Identification" onChange={e => setcar(e.target.value)} value={car}></TextField><br></br>
    <br></br>
    <Button color="primary" 
                    variant={"contained"} 
                    startIcon={<Add />} onClick={e => { submit(e) }}>Call Car To Location</Button>
    </Container>
    </div>


}

export default FormCars;