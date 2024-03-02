import Logo from "../../public/PapiCoding Logo.svg";
import Image from "next/image";

export default function Navbar(){
    return (
        <div className="mx-7 flex justify-between items-center">        
            <Image src={Logo} alt="PapiCoding Logo" width={250} height={125} />
                  
            <div className="flex">
                <p className="mx-10 text-2xl">Home</p>
                <p className="mx-10 text-2xl">About</p>
                <p className="mx-10 text-2xl">Our Services</p>
                <p className="mx-10 text-2xl">Teacher</p>
            </div>

            <button className="border-2 border-[rgb(214,0,141)] px-5 py-2 rounded-3xl text-2xl">
                Contact Us
            </button>
        </div>
    )
}