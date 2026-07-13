import React from 'react'
import NavigationBar from './Navigation'

const Home = () => {
  return (
    <>
    <NavigationBar />

    <div className="container mt-5">
      <h1 className="text-center">CAR RENTAL APP</h1>

      <h2 className="text-center mt-4">
        Welcome to Our Car Rental App
      </h2>

      <p className="mt-3 text-center">
        A Car Rental Application that allows users to browse available cars,
        view vehicle details, check rental prices, and book cars for specific
        dates. The application provides an intuitive interface for managing
        bookings and vehicle information.
      </p>
    </div>
    </>
  )
}

export default Home