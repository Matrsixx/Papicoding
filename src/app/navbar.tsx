import Logo from "../../public/PapiCoding Logo.svg";
import Image from "next/image";
import Link from 'next/link'

export default function Navbar(){
    return (
        <div className="mx-5 flex justify-between items-center my-5">   
            <Link href="/">
                <Image src={Logo} alt="PapiCoding Logo" width={250} height={125} className="w-24 md:w-44 2xl:w-60"/>
            </Link>       
                  
            <div className="flex">
                <Link className="mx-1 text-[12px] md:mx-5 lg:text-lg 2xl:text-2xl" href="/#service">Layanan</Link>
                <Link className="mx-1 text-[12px] md:mx-5 lg:text-lg 2xl:text-2xl" href="/#teacher">Pengajar</Link>
                <Link className="mx-1 text-[12px] md:mx-5 lg:text-lg 2xl:text-2xl" href="/#faq">FAQ</Link>
            </div>

            <Link href="https://wa.me/+6285931036288?text=Halo Papicoding" target="_blank">
                <button className="border border-[rgb(214,0,141)] px-2 py-1 rounded-xl text-[11px] md:border-2 lg:text-lg lg:rounded-2xl 2xl:text-2xl 2xl:px-5 2xl:py-2">
                    Hubungi Kami
                </button>
            </Link>
            
        </div>
    )
}