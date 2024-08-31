import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <section 
      className="bg-cover bg-center h-80 flex flex-col" 
      style={{ backgroundImage: `url(https://mlconference.ai/wp-content/uploads/2022/12/MLCon_MUC23_Website_Program_BG_Desktop_68216_v1.jpg)` }}
    >
      <Navbar />
      <div className="text-white ml-8 flex flex-col px-8 my-auto">
        <h1 className="text-4xl font-bold">IoT ML Workshop</h1>
        <p className="mt-2 text-lg">Organized by Indian Institute of Information Technology, SriCity</p>
        <p className="mt-1 text-lg">Dates: December 09-13, 2024</p>
      </div>
    </section>
  )
}
