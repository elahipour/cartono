import Link from "next/link"


function Header() {
  return (
    <header className="flex justify-center mt-[80px]">
      <main className="w-[400px] bg-[url('/images/flag.png')] bg-cover bg-left-top  h-fit  [border-radius:7px_7px_0_0] flex flex-col gap-10 p-4">
        {/* header section */}
        <div className="flex flex-col items-center  bg-[rgba(240,240,240,.7)] border-2 border-[#ddd] backdrop-blur-sm bg-white/50 py-4 rounded-md">
          <h1 className="text-[28px] font-bold underline underline-offset-8">CarToNo</h1>
          <h4 className="text-[14px]">Choose and Buy Your Car</h4>
        </div>
        {/* all cars */}
        <Link className="w-full flex justify-center  bg-[#f0f0f0] border-2 border-[#ddd] rounded-md p-1 font-[600] font-[14px]" href={'/cars/filter?category=all&min=0&max=0'}>See All Cars</Link>
      </main>
    </header>
  )
}

export default Header