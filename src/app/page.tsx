"use client"
import Figure1 from "../../public/figure1.svg";
import Image from "next/image";

export default function Home() { 
  return (
    <div className="m-auto">
      <div className="max-w-[1700px] m-auto grid md:flex" id="home">

        <div className="flex justify-between flex-col px-10 text-center md:text-left">
          <p className="text-2xl font-bold bg-gradient-to-r from-[rgb(0,72,255)] to-[rgb(214,0,141)] inline-block text-transparent bg-clip-text py-5 md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Pengajaran Coding Termurah di Indonesia</p>
          
          <p className="text-sm text-justify md:text-left md:text-sm lg:text-xl xl:text-2xl 2xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at veniam dolorum possimus provident assumenda, distinctio asperiores! Porro voluptatem, atque qui tempore vel quod maiores placeat? Fuga reprehenderit non labore.</p>

          <button className="bg-gradient-to-l from-[rgb(9,21,63)] to-[rgb(0,43,194)] w-fit px-5 py-2 rounded-3xl text-white text-sm m-auto mt-5 md:m-0 lg:text-lg xl:text-xl 2xl:text-2xl">
            Learn More {'-->'}
          </button>
        </div>
          
        <Image src={Figure1} alt="Figure 1" className="w-1/2 m-auto pt-6"/>
      </div>                 
    </div>
    
  );
}
