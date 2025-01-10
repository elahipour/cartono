
import DetailPage from "@/app/components/template/DetailPage"

async function CarModel({ params }) {

  return (
    <DetailPage params={await params}/>
  )
}

export default CarModel