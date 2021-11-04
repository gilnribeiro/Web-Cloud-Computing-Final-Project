import React from 'react'

function ListTrips(props:any) {
  return <>
  <ul>
      {
          props.trip.map((t: { car: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; to: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; duration: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
              return <li key={index}>Car with ID {t.car} to {t.to} duration {t.duration} minutes</li>
          })
  }
  </ul>
</>
};

export default ListTrips;