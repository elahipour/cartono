"use client"

import carsData from "@/app/data/carsData"
import Card from "../modules/Card"

function CarsList() {
  return (
    <main className='flex flex-col items-center w-full'>
    <div className='grid grid-cols-3 gap-16 py-12'> 

    {
      carsData.map(car=>
       <Card key={car.id} data={car}/>
     )
   }
   </div>
   </main>
  )
}

export default CarsList