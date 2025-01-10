"use client"
import Card from '../modules/Card'
import carsData from "@/app/data/carsData";
import filterByPrice from "@/app/helper/filterByPrice";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

function CarsFilter() {
    const [filteredCarList, updateFilteredCarList] = useState([...carsData]);
    const params = useSearchParams();
    const category = params.get('category');
    const minValue = params.get('min');
    const maxValue = params.get('max');

    useEffect(() => {

        const inCategory = (category === 'null' || category === 'all') ? carsData : carsData.filter(car => car.category === category);
        let priceFilter = filterByPrice(minValue, maxValue, inCategory);
        priceFilter.length ? updateFilteredCarList([...priceFilter]) : maxValue === '0' ? updateFilteredCarList([...inCategory]) : updateFilteredCarList([])

    }, [category, maxValue])
    return (
        <main className='flex flex-col items-center w-full'>
            <div className='grid grid-cols-3 gap-16 py-12'>{
                filteredCarList?.map(car => {
                    return <Card key={car.id} data={car} />
                })

            }
            </div>
            <div className="flex justify-center w-full">{!filteredCarList.length && <p className="bg-red-500 p-2 text-white rounded-md">no cars in range...</p>}</div>
        </main>
    )
}

export default CarsFilter