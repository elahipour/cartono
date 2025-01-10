"use client"
import Link from "next/link"
import Sedan from "../icons/Sedan"
import Suv from "../icons/Suv"
import Hatchback from "../icons/Hatchback"
import Sport from "../icons/Sport"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

function CarsHeader({ min, max, setMin, setMax }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('category') === 'all' && (searchParams.get('min') === '0'||searchParams.get('min')==='') || (searchParams.get('max') === '0'||searchParams.get('max')==='')) {
      setMin(0);
      setMax(0);
    }
  }, [searchParams])

  return (
    <header className="flex justify-center ">

      <main className="w-[400px] bg-transparent-4 h-fit [border-radius:0_0_7px_7px] mb-2  p-4 flex flex-col gap-10 backdrop-blur-md bg-white/20">

        {/* price-filter section */}
        <div className="flex gap-2 p-2 rounded-md [box-shadow:0_0_4px_1px_rgba(230,230,230,.5)] mx-2">
          <div className="flex flex-col gap-2 w-full">
            <input placeholder="start price" onChange={(e) => setMin(e.target.value)} value={min} className="p-1 rounded outline-none border" type='number' required/>
            <input placeholder="end price" onChange={(e) => setMax(e.target.value)} value={max} className="p-1 rounded outline-none border" type='number' required/>
          </div>
          <Link href={`/cars/filter/?category=${searchParams.get('category')}&min=${min}&max=${max}`} className=" bg-[#f0f0f0] w-[100px] grid place-items-center rounded-md">Search</Link>
        </div>
        {/* category-filter section */}
        <div className="flex justify-between gap-2 p-1 mx-2 rounded-md bg-gray-50">
          <Link href={`/cars/filter/?category=sedan&min=${min}&max=${max}`} className="flex flex-col w-full items-center  bg-[#f0f0f0] rounded-md text-[14px] font-[600]">
            <span>Sedan</span>
            <Sedan />
          </Link>
          <Link href={`/cars/filter/?category=suv&min=${min}&max=${max}`} className="flex flex-col w-full items-center  bg-[#f0f0f0] rounded-md text-[14px] font-[600]">
            <span>SUV</span>
            <Suv />
          </Link>
          <Link href={`/cars/filter/?category=hatchback&min=${min}&max=${max}`} className="flex flex-col w-full items-center  bg-[#f0f0f0] rounded-md text-[14px] font-[600]">
            <span>Hatchback</span>
            <Hatchback />
          </Link>
          <Link href={`/cars/filter/?category=sport&min=${min}&max=${max}`} className="flex flex-col w-full items-center  bg-[#f0f0f0] rounded-md text-[14px] font-[600]">
            <span>Sport Car</span>
            <Sport />
          </Link>
        </div>

      </main>
    </header>
  )
}

export default CarsHeader