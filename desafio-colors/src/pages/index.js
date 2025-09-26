import ComponenteColor from "./componnets/ComponeneColor"


export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-white">Hello! </h1>
      
      <ComponenteColor/>
  
    </div>
  )
}