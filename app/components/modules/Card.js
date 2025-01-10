import Link from "next/link";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Model from "../icons/Model";


function Card({ data }) {

  const { id, name, model, year, distance, location, price, category, image } = data;
  return (
    <div className="[box-shadow:0_0_5px_3px_rgba(230,230,230,.9)] rounded-md p-4 bg-[#f0f0f0] hover:bg-[#f4f4f4] flex flex-col gap-4 group select-none ">
      <div className="w-fit h-fit overflow-hidden rounded-lg "><img className="w-[280px] group-hover:scale-[1.2] group-hover:transition-transform group-hover:duration-[3500ms] ease-in group-hover:ease-out duration-[1000ms]" src={image} alt={data.id} /></div>
      <div className="relative flex">
        <strong>{name} {model}</strong>
        <h4 className="absolute rotate-[45deg] top-[80] right-[0px] font-semibold text-[30px] font-mono opacity-[0.08]">{category}</h4>
        </div>
      <div className="rounded-md h-fit overflow-hidden">
        <h4 className="py-2 border-b-2  bg-[#fff] text-[#333] font-bold pl-4 flex gap-2"><Money />{price}</h4>
        <h4 className="py-2 border-b-2  bg-[#fff] text-[#333] font-bold  pl-4 flex gap-2"><Road />{distance}</h4>
        <h4 className="py-2 font-bold  bg-[#fff] text-[#333] flex gap-3 pl-4"><Model />{year}</h4>
      </div>
      <Link href={`/cars/${id}`} className="bg-[#333] font-bold text-white text-center rounded-md px-6 w-full py-2">details</Link>
    </div>
  )
}

export default Card