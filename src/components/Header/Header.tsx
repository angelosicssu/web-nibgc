import Image from "next/image";
import { Roboto} from "next/font/google";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube, FaSpotify } from "react-icons/fa";


const robotoMono = Roboto({
  subsets: ["latin"],
  weight: "600"
})

export function Header() {
  return(
    <aside className={` ${robotoMono.className} flex p-3 justify-between  items-center bg-linear-to-r from-blue-950 to-blue-900 uppercase text-xl text-zinc-200`}>
      <Image src={'/logo-header.png'} alt="Logo-NIBGC" width={100} height={100}/>
      <ul className="flex cursor-pointer gap-10 items-center">
        <div className="flex gap-5">
          <li className="relative group hover:text-white">
            <a href="#">Quem Somos</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-500 group-hover:w-full rounded-2xl"></span>
          </li>
          <li className="relative group hover:text-white">
            <a href="#">Meditação</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-500 group-hover:w-full rounded-2xl"></span>
          </li>
          <li className="relative group hover:text-white">
            <a href="#">Eventos</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-500 group-hover:w-full rounded-2xl"></span>
          </li>
        </div>
        <div className="flex gap-3">
          <li><a href="https://www.instagram.com/nibgrandecircular/" target="_blank" className="hover:text-white duration-300"><FaYoutube size={25}/></a></li>
          <li><a href="https://www.instagram.com/nibgrandecircular/" target="_blank" className="hover:text-white duration-300"><AiFillInstagram size={25}/></a></li>
          <li><a href="#" className="hover:text-white duration-300"><FaSpotify size={25}/></a></li>
        </div>
        <li>
          <div className="bg-yellow-500 px-3 py-1 rounded-md text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
            <p>Contato</p>
          </div>
        </li>
      </ul>
    </aside>
  )
}