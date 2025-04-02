import { Header } from "@/components/Header/Header";
import { Roboto, Poppins } from "next/font/google";
import { FaPlayCircle } from "react-icons/fa";

const robotoMono = Roboto({
  subsets: ['latin'],
  weight: "800"
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: "800"
})


export default function Home() {
  return (
    <div>
      <Header/>
      <aside className="h-[650px] bg-[url('/bg-home.png')] bg-cover text-white flex items-center"> 
        <div className="flex w-full justify-around items-center">
          <div className="flex-col gap-7">
            <div className={`${robotoMono.className} drop-shadow-xl`}> 
              <h1 className={`uppercase text-8xl`}>Seja</h1>
              <span 
                className={`${poppins.className} uppercase text-8xl text-transparent stroke-white`}
                style={{
                  WebkitTextStroke: "3px white",
                  color: "transparent"
                }}
                >Bem Vindo</span>
            </div>
            <div className="my-5">
              <a 
                href="https://www.youtube.com/watch?v=_OhfUKTOECQ" 
                target="_blank"
                className="relative inline-flex border-4 bg-gray-300/20 rounded-md p-2 uppercase text-2xl font-bold items-center gap-2 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div
                  className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50"
                ></div>
                <FaPlayCircle size={30}/>
                <p>Nossa Igreja</p>
              </a>
            </div>
          </div>

          <div className="flex-col items-center text-center">
            <h1 className={`${robotoMono.className} text-4xl`}>Como Um Servo de Deus Deve Agir</h1>
            <p className={`text-gray-200`}>Culto Familiar</p>
            <div className="border-6 rounded-md my-3">
              <iframe width="590" height="345" src="https://www.youtube.com/embed/PkqvL1amsJg?si=Quw5VgvO8UEa3I6C" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
