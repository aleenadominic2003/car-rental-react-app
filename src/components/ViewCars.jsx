import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewCars = () => {

    const[data,changData]=useState(

        [

            
        ]

    )
    const fetchData = () => {

        axios.get("https://host-demo-app.onrender.com/api/cars").then(

            (response) => {

                changData(response.data)

            }

        ).catch()

    }
    useEffect(

        () => {

            fetchData()

        },[]

    )
  return (
    <div>
        <NavigationBar />
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">
           

          <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-dark">
      <tr>
        
        <th>Registration_number</th>
        <th>Brand</th>
        <th>model</th>
        <th>Vehicle_type</th>
        <th>Fuel_type</th>
        <th>Transmission</th>
        <th>Seating_capacity</th>
        <th>Rent_per_day</th>
        <th>City</th>
        <th>Availability_status</th>
        
      </tr>
    </thead>
    <tbody>
      {data.map((value, index) => (
        <tr key={index}>
          
          <td>{value.registration_number}</td>
          <td>{value.brand}</td>
          <td>{value.model}</td>
          <td>{value.vehicle_type}</td>
          <td>{value.fuel_type}</td>
          <td>{value.transmission}</td>
          <td>{value.seating_capacity}</td>
          <td>{value.rent_per_day}</td>
          <td>{value.city}</td>
          <td>{value.availability_status}</td>
          
          <td>
            <button className="btn btn-primary btn-sm">
              View Car
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
           
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default ViewCars