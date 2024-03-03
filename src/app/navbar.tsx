import Logo from "../../public/PapiCoding Logo.svg";
import Image from "next/image";
import Link from 'next/link'

export default function Navbar(){
    return (
        <div className="mx-5 flex justify-between items-center my-5">   
            <Link href="/">
                <Image src={Logo} alt="PapiCoding Logo" width={250} height={125} className="w-36 md:w-44 2xl:w-60"/>
            </Link>       
                  
            <div className="flex">
                <Link className="mx-5 text-sm lg:text-lg 2xl:text-2xl" href="/#service">Services</Link>
                <Link className="mx-5 text-sm lg:text-lg 2xl:text-2xl" href="/#teacher">Teacher</Link>
                <Link className="mx-5 text-sm lg:text-lg 2xl:text-2xl" href="/#faq">FAQ</Link>
            </div>

            <button className="border-2 border-[rgb(214,0,141)] px-2 py-1 rounded-xl text-sm lg:text-lg lg:rounded-2xl 2xl:text-2xl 2xl:px-5 2xl:py-2">
                Contact Us
            </button>
        </div>
    )
}