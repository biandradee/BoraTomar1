"use client";
import Cards from "@/components/ui/cards";
import { BiSearchAlt2 } from 'react-icons/bi';
import Map from "@/components/ui/map";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <header className="flex border-b border-slate-200 p-4 bg-yellow-400 justify-between items-center">
          <span className="sm:text-xl lg:text-2xl font-bold">
            BoraTomar1
          </span>
          <div className="flex justify-center items-center">
            <input className="rounded-l-lg outline-none w-40 lg:w-[300px] h-8 lg:h-[30px] pl-2" type="text" placeholder="" />
            
            <button className="flex justify-center items-center bg-black cursor-pointer w-[40px] h-[30px] rounded-r-lg">
              <BiSearchAlt2 className="w-[60px] text-white" />
            </button>
          </div>
        </header>

        <div className="flex flex-1 p-4">
          <div className="flex-[2_2_0%]">
            <Cards/>
          </div>

          <div className="flex-1 pl-4 outline-none hidden md:block">
            <Map />
          </div>
        </div>

        <footer className="border-t border-slate-200 p-3 bg-yellow-400 lg:text-xl sm:text-lg">
          &copy; Desenvolvido por Bianca Andrade
        </footer>
      </main>
    </>
  )
}
