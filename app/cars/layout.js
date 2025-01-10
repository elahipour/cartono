"use client"
import { useState } from "react";
import CarsHeader from "../components/modules/CarsHeader"
import Header from "../components/modules/Header"

function carsLayout({children}) {
  const [min,setMin]=useState(0);
  const [max,setMax]=useState(0);
  return (
    <div>
    <Header/>
    <CarsHeader min={min} max={max} setMin={setMin} setMax={setMax}/>
     {children}
    </div>
  )
}
export default carsLayout