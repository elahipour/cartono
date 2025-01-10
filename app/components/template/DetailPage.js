
import carsData from "@/app/data/carsData"


function DetailPage({params}) {

    const id =params.id;
    if (!id) return <div>no data</div>
    const { name, model, year, distance, location, price, category, image } = carsData[id - 1];
  
    return (
    <div className="w-[60%] h-auto rounded-md mx-auto mt-12 overflow-hidden  select-none">
    <div className="bg-[#fdfdfd] flex flex-wrap gap-2 p-2">
      <div className="flex rounded-md overflow-hidden"><span className="p-3 text-gray-900 font-bold bg-green-200 text-[12px]">company :</span><h3 className="p-3 bg-gray-800 text-gray-50 text-[14px]">{name}</h3></div>
      <div className="flex rounded-md overflow-hidden"><span className="p-3 text-gray-900 font-bold bg-green-200 text-[12px]">model :</span><h3 className="p-3 bg-gray-800 text-gray-50 text-[14px]">{model}</h3></div>
      <div className="flex rounded-md overflow-hidden"><span className="p-3 text-gray-900 font-bold bg-green-200 text-[12px]">year :</span><h3 className="p-3 bg-gray-800 text-gray-50 text-[14px]">{year}</h3></div>
      <div className="flex rounded-md overflow-hidden"><span className="p-3 text-gray-900 font-bold bg-green-200 text-[12px]">distance :</span><h3 className="p-3 bg-gray-800 text-gray-50 text-[14px]">{distance}</h3></div>
      <div className="flex rounded-md overflow-hidden"><span className="p-3 text-gray-900 font-bold bg-green-200 text-[12px]">price :</span><h3 className="p-3 bg-gray-800 text-gray-50 text-[14px]">{price}</h3></div>
      <div className="flex rounded-md overflow-hidden"><span className="p-3 text-gray-900 font-bold bg-green-200 text-[12px]">location :</span><h3 className="p-3 bg-gray-800 text-gray-50 text-[14px]">{location}</h3></div>
      <div className="flex rounded-md overflow-hidden"><span className="p-3 text-gray-900 font-bold bg-green-200 text-[12px]">category :</span><h3 className="p-3 bg-gray-800 text-gray-50 text-[14px]">{category}</h3></div>
    </div>
    <img className="w-full bg-[#c0f0f0] p-2" src={image} alt={'carsimage'} />
  </div>
  )
}

export default DetailPage