import { Button, TextField, List, ListItem, ListItemText, ListItemIcon, Checkbox, Container } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import React from 'react';
import { useState } from 'react';

interface Trip {car:string, to:string, duration:string}

function FormTrips({addTrip}:any) {
const [car, setcar] = useState("");
const [to, setto] = useState("");
const [duration, setduration] = useState("");

//post new trip to server
function createTrip(trip:Trip) {
    fetch("/trips", {
        method: "POST", headers: {
            'content-type': 'application/json;charset=UTF-8',
        }, mode: "no-cors",
        body: JSON.stringify(trip) })
    .then( data => console.log(data) )
}

const submit= (e:any) => {
    e.preventDefault()
    let trip = {car:car, to:to, duration:duration}
    addTrip(trip)
    createTrip(trip)
    //e.preventDefault()
    setcar("")
    setto("")
    setduration("")
}


return <div>

    {/* <ul><label>Car Identification </label><input type="text" onChange={e => setcar(e.target.value)} value={car}></input></ul>
    <ul><label>Location </label><input type="text" onChange={e => setto(e.target.value)} value={to}></input></ul>
    <ul><label>Duration </label><input type="text" onChange={e => setduration(e.target.value)} value={duration}></input></ul>
    <ul><input type="submit" value="Call Car To Location" onClick={e => { submit(e) }}></input></ul>
     */}
    <Container>
    <TextField label="Car Identification" onChange={e => setcar(e.target.value)} value={car}></TextField><br></br>
    <TextField label="Location" onChange={e => setto(e.target.value)} value={to}></TextField><br></br>
    <TextField label="Duration" onChange={e => setduration(e.target.value)} value={duration}></TextField><br></br>
    <br></br>
        <Button color="primary" 
                    variant={"contained"} 
                    startIcon={<Add />} onClick={e => { submit(e) }}>Call Car To Location</Button>
    </Container>
    </div>

}

export default FormTrips;