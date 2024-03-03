import linkedinLogo from "../../public/linkedin_logo.svg";
import instagramLogo from "../../public/instagram_logo.svg";
import whatsappLogo from "../../public/whatsapp_logo.svg";
import Image from "next/image";

export default function Contact(){
    return (
        <>
            <p className="my-20 text-[rgb(0,72,255)] text-5xl text-center font-semibold">Find Us On</p>
      
            <div className="flex justify-center max-w-[1700px] mx-auto pb-20">
                <Image src={linkedinLogo} alt="Linkedin Logo" className="w-16 xl:w-20 mx-10"/>
                <Image src={instagramLogo} alt="Linkedin Logo" className="w-16 xl:w-20"/>
                <Image src={whatsappLogo} alt="Linkedin Logo" className="w-16 xl:w-20 mx-10"/> 
            </div>
        </>
        
    )
}