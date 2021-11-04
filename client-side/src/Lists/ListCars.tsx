import React from 'react'

interface Car {car:string, driver:string}

function ListCars(props:any) {
  return <>
  <ul>
      {
          props.car.map((t:Car) => {
              return <li>Car with ID {t.car} driver {t.driver}</li>
          })
  }
  </ul>
</>
};

export default ListCars;