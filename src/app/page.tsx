"use client"
import Figure1 from "../../public/figure1.svg";
import Image from "next/image";
import Link from 'next/link'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VincentPhoto from "../../public/Vincent_Photo.jpeg";
import HowiePhoto from "../../public/Howie_Photo.png";
import JunthauPhoto from "../../public/Junthau_Photo.png";
import linkedinLogo from "../../public/linkedin_logo.svg";
import whatsappLogo from "../../public/whatsapp_logo.svg";
import { useState } from "react";

export default function Home() {
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 1280 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1280, min: 1024 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 1024, min: 0 },
            items: 1,
        }
    };

    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);

    const handleClick = () => {
        isShown ? setIsShown(false) : setIsShown(true);
    }

    const handleClick1 = () => {
        isShown1 ? setIsShown1(false) : setIsShown1(true);
    }

    const handleClick2 = () => {
        isShown2 ? setIsShown2(false) : setIsShown2(true);
    }

    return (
        <div className="m-auto">
            <div className="max-w-[1700px] m-auto grid md:flex" id="home">

                <div className="flex justify-between flex-col px-10 text-center md:text-left">
                    <p className="text-2xl font-bold bg-gradient-to-r from-[rgb(0,72,255)] to-[rgb(214,0,141)] inline-block text-transparent bg-clip-text py-5 md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Pengajaran Coding Termurah di Indonesia</p>

                    <p className="text-sm text-justify md:text-left md:text-sm lg:text-xl xl:text-2xl 2xl:text-2xl">Mulai perjalananmu di dunia digital dengan kursus coding yang terjangkau dan berkualitas!, Tim pengajar kami terdiri dari para profesional yang berpengalaman dan berdedikasi untuk memberikan pembelajaran terbaik.</p>

                    <Link href="/#about">
                        <button className="bg-gradient-to-l from-[rgb(9,21,63)] to-[rgb(0,43,194)] w-fit px-5 py-2 rounded-3xl text-white text-sm m-auto mt-5 md:m-0 lg:text-lg xl:text-xl 2xl:text-2xl">
                            Pelajari Lebih Lanjut {'-->'}
                        </button>
                    </Link>
                </div>

                <Image src={Figure1} alt="Figure 1" className="w-1/2 m-auto pt-6" />
            </div>

            <div className="bg-[rgb(237,247,255)] mt-14 text-center px-10 py-10 xl:py-14 2xl:py-20" id="about">
                <p className="text-[rgb(0,72,255)] max-w-[1700px] m-auto font-semibold mb-5 text-2xl lg:text-4xl 2xl:text-5xl 2xl:mb-10">Tentang Kami</p>
                <p className="text-sm text-justify m-auto text-md max-w-[1700px] lg:text-xl lg:px-14 xl:text-2xl">Papicoding didirikan oleh sekelompok mahasiswa yang memiliki passion dalam bidang coding. Kami percaya bahwa coding adalah skill yang penting untuk dimiliki di era digital ini.Kami merasakan sendiri bagaimana manfaat belajar coding, yaitu membuka peluang kerja yang lebih luas dan meningkatkan penghasilan. Namun, kami juga menyadari bahwa biaya belajar coding bisa menjadi hambatan bagi banyak orang. Oleh karena itu, kami terinspirasi untuk mendirikan Papicoding dengan tujuan untuk menyediakan pengajaran coding yang murah dan berkualitas bagi semua orang.</p>

            </div>

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold scroll-py-24" id="service">Layanan Kami</p>

            <Carousel responsive={responsive} ssr itemClass="md:px-10" className="mx-10 lg:m-auto max-w-[1700px]" showDots={true} keyBoardControl={true} swipeable={true}>
                <div className="grid bg-[rgb(255,245,255)] py-10 text-center w-full h-fit">
                    <p className="text-xl font-bold text-[rgb(0,43,154)]">Frontend</p>
                    <p className="my-5 px-5 ">Mempelajari dasar dasar frontend di website menggunakan HTML, CSS dan Javascript</p>
                    <p className="text-3xl font-semibold">IDR 100,000<span className="text-base tracking-normal font-semibold">/session</span></p>

                    <Link href="https://wa.me/+6285931036288?text=Halo Papicoding, Saya ingin memesan paket Frontend" target="_blank">
                        <p className="mt-5 mx-6 py-3 border border-[rgb(0,72,255)] text-[rgb(0,72,255)] font-semibold rounded-lg hover:bg-[rgb(240,245,255)]">Beli Sekarang!</p>
                    </Link>
                    

                    <ul className="my-10 px-5">
                        <li className="border-t-2 flex text-left py-5">
                            ✓
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="border-t-2 flex text-left py-5">
                            ✓
                            <span className="ml-4">Anda akan belajar cara membuat UI/UX yang menarik dan user-friendly</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            ✓
                            <span className="ml-4">Mendapatkan sertifikat apabila menyelesaikan tugas project</span>
                        </li>
                    </ul>
                </div>

                <div className="grid bg-[rgb(255,245,255)] py-10 text-center w-full h-fit border-2 border-[rgb(0,43,154)]">

                    <p className="text-xl font-bold text-[rgb(0,43,154)]">Fullstack</p>
                    <p className="my-5 px-5 ">Mempelajari dasar dasar dari fullstack menggunakan PHP, HTML, CSS, MySQL</p>
                    <p className="text-3xl font-semibold">IDR 200,000<span className="text-base tracking-normal font-semibold">/session</span></p>
                    
                    <Link href="https://wa.me/+6285931036288?text=Halo Papicoding, Saya ingin memesan paket Fullstack" target="_blank">
                        <p className="mt-5 mx-6 py-3 bg-[rgb(0,72,255)] text-white font-semibold rounded-lg hover:bg-[rgba(0,72,255,0.9)]">Beli Sekarang! Best deal</p>
                    </Link>
                    

                    <ul className="my-10 px-5">
                        <li className="border-t-2 flex text-left py-5">
                            ✓
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="border-t-2 flex text-left py-5">
                            ✓
                            <span className="ml-4">Anda akan mempelajari semua yang diperlukan untuk membangun aplikasi web lengkap, mulai dari frontend, backend, hingga database.</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            ✓
                            <span className="ml-4">Mendapatkan sertifikat apabila menyelesaikan tugas project</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            ✓
                            <span className="ml-4">Developer fullstack sangat diminati di pasar kerja karena mereka memiliki skillset yang lengkap.</span>
                        </li>
                    </ul>
                </div>

                <div className="grid bg-[rgb(255,245,255)] py-10 text-center w-full h-fit">
                    <p className="text-xl font-bold text-[rgb(0,43,154)]">Database</p>
                    <p className="my-5 px-5 ">Mempelajari dasar dasar Database menggunakan MySQL</p>
                    <p className="text-3xl font-semibold">IDR 100,000<span className="text-base tracking-normal font-semibold">/session</span></p>

                    <Link href="https://wa.me/+6285931036288?text=Halo Papicoding, Saya ingin memesan paket Database" target="_blank">
                        <p className="mt-5 mx-6 py-3 border border-[rgb(0,72,255)] text-[rgb(0,72,255)] font-semibold rounded-lg hover:bg-[rgb(240,245,255)]">Beli Sekarang!</p>
                    </Link>
                    

                    <ul className="my-10 px-5">
                        <li className="border-t-2 flex text-left py-5">
                            ✓
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="border-t-2 flex text-left py-5">
                            ✓
                            <span className="ml-4">Anda akan mempelajari bagaimana melakukan query ke database</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            ✓
                            <span className="ml-4">Mendapatkan sertifikat apabila menyelesaikan tugas project</span>
                        </li>
                    </ul>
                </div>
            </Carousel>

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold" id="teacher">Temui Guru Anda</p>

            <div className="bg-[rgb(249,249,249)]">
                <div className="flex justify-between  py-10 px-6 items-center max-w-[1700px] m-auto my-20 relative xl:justify-center">
                    <div className="text-center">
                        <Image src={VincentPhoto} alt="Teacher Photo" className="rounded-full md:w-2/3 m-auto mb-2" />
                        <p className="text-[rgb(0,43,154)] font-semibold text-[12px] md:text-base lg:text-lg xl:text-xl">Security Engineer @blibli.com</p>
                    </div>

                    <div className="w-[800px] px-4">
                        <p className="flex text-left py-2">
                            <span className="ml-4 text-justify text-[rgb(0,72,255)] text-[11px] font-bold md:text-left  md:text-base lg:text-lg xl:text-3xl">Vincent Aldiandra Gautama Martanu</span>
                        </p>
                        <p className="flex text-left py-2">
                            <span className="ml-4 text-justify text-[10px] md:text-base lg:text-lg xl:text-2xl">Mahasiswa Cyber Security dari Bina Nusantara, selain fokus dalam dunia security, memiliki skill developer yang mumpuni untuk membantu teman-teman belajar dan memahami dunia pemrograman.</span>

                        </p>
                    </div>
                    <Link href="https://www.linkedin.com/in/vincentaldiandra" target="_blank"><Image src={linkedinLogo} alt="Linkedin Logo" className="w-7 absolute right-3 bottom-3 lg:w-10" /></Link>

                </div>
            </div>

            <div className="bg-[rgb(249,249,249)]">
                <div className="flex justify-between  py-10 px-6 items-center max-w-[1700px] m-auto my-20 relative xl:justify-center">
                    <div className="text-center">
                        <Image src={HowiePhoto} alt="Teacher Photo" className="rounded-full md:w-2/3 m-auto mb-2" />
                        <p className="text-[rgb(0,43,154)] font-semibold text-[12px] md:text-base lg:text-lg xl:text-xl">System Analyst @Bina Nusantara</p>
                    </div>

                    <div className="w-[800px] px-4">
                        <p className="flex text-left py-2">
                            <span className="ml-4 text-justify text-[rgb(0,72,255)] text-[11px] font-bold md:text-left  md:text-base lg:text-lg xl:text-3xl">Howie Ciuputra</span>
                        </p>
                        <p className="flex text-left py-2">
                            <span className="ml-4 text-justify text-[10px] md:text-base lg:text-lg xl:text-2xl">Mahasiswa Universitas Bina Nusantara yang berkomitmen tinggi mengembangkan teknologi di Indonesia yang dimulai dari website development. Dengan kemampuan front end dan database siap membagikan ilmu dengan rekan-rekan sekalian.</span>

                        </p>
                    </div>
                    <Link href="https://www.linkedin.com/in/howie-ciuputra/" target="_blank"><Image src={linkedinLogo} alt="Linkedin Logo" className="w-7 absolute right-3 bottom-3 lg:w-10" /></Link>
                </div>
            </div>

            <div className="bg-[rgb(249,249,249)]">
                <div className="flex justify-between  py-10 px-6 items-center max-w-[1700px] m-auto my-20 relative xl:justify-center">
                    <div className="text-center">
                        <Image src={JunthauPhoto} alt="Teacher Photo" className="rounded-full md:w-2/3 m-auto mb-2" />
                        <p className="text-[rgb(0,43,154)] font-semibold text-[12px] md:text-base lg:text-lg xl:text-xl">Junior Programmer @Bina Nusantara</p>
                    </div>

                    <div className="w-[800px] px-4">
                        <p className="flex text-left py-2">
                            <span className="ml-4 text-justify text-[rgb(0,72,255)] text-[11px] font-bold md:text-left  md:text-base lg:text-lg xl:text-3xl">Junthau Hans William</span>
                        </p>
                        <p className="flex text-left py-2">
                            <span className="ml-4 text-justify text-[10px] md:text-base lg:text-lg xl:text-2xl">Mahasiswa semester 4 yang berkomitmen di Bina Nusantara, saya adalah seorang junior programmer yang bekerja penuh waktu dengan fokus pengajaran pada frontend development dengan pemahaman mendalam tentang HTML, CSS, dan JavaScript</span>

                        </p>
                    </div>
                    <Link href="https://www.linkedin.com/in/junthau/" target="_blank"><Image src={linkedinLogo} alt="Linkedin Logo" className="w-7 absolute right-3 bottom-3 lg:w-10" /></Link>
                </div>
            </div>

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold" id="faq">FAQ</p>

            <div className="max-w-[1700px] mx-3 2xl:mx-auto">
                <div className="border border-black my-10">
                    <button className="text-left flex py-4 md:py-7 text-base md:text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick}>
                        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fillRule="evenodd" clipRule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
                        Apakah saya mendapatkan sertifikat ?
                    </button>
                    <p className={`px-8 text-md pb-5 bg-[rgb(239,247,255)] ${isShown ? `block ` : `hidden absolute`} lg:text-lg xl:text-xl`}>Iya! kamu akan mendapatkan sertifikat resmi yang sudah ditandatangani. <br /><br />Kamu bisa mendapatkan sertifikat apabila menyelesaikan project dari kami, project akan kamu dapatkan setelah mengikuti setiap sesi dari pengajaran kami. Sertifikat ini juga dapat diupload di Linkedin dan dapat diverifikasi langsung di website kami.</p>
                </div>

                <div className="border border-black mb-10">
                    <button className="text-left flex py-4 md:py-7 text-base md:text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick1}>
                        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown1 ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fillRule="evenodd" clipRule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
                        Bagaimana cara mendaftar dan mulai belajar?
                    </button>
                    <p className={`px-8 text-md pb-5 bg-[rgb(239,247,255)] ${isShown1 ? `block ` : `hidden absolute`} lg:text-lg xl:text-xl`}>Kamu cukup mendaftar melalui Whatsapp kami dan melakukan pembayaran<br /><br />Setelah melakukan pembayaran, tim kami akan melakukan penjadwalan sesi dengan pengajar. Kamu juga berhak untuk me-<i>reschedule</i> jadwal pertemuan jika memang diperlukan.</p>
                </div>

                <div className="border border-black">
                    <button className="text-left flex py-4 md:py-7 text-base md:text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick2}>
                        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown2 ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fillRule="evenodd" clipRule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
                        Bagaimana sistem pengajarannya?
                    </button>
                    <p className={`px-8 text-md pb-5 bg-[rgb(239,247,255)] ${isShown2 ? `block ` : `hidden absolute`} lg:text-lg xl:text-xl`}>Sistem pengajaran dilakukan secara <i>online</i> dan <i>private</i>.<br /><br />Saat ini belum tersedia untuk pertemuan langsung secara <i>onsite</i>, dan untuk lama per sesi nya kami hitung sampai materi benar benar habis.</p>
                </div>
            </div>

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold">Find Us On</p>

            <div className="flex justify-center max-w-[1700px] mx-auto pb-20">
                <Link href="https://wa.me/+6285931036288?text=Halo Papicoding">
                    <Image src={whatsappLogo} alt="Whatsapp Logo" className="w-12 md:w-16 xl:w-20 mx-10" />
                </Link>
            </div>

            <div className="w-full bg-[rgb(51,51,51)] py-5">
                <p className="text-sm md:text-base text-center text-white">Papicoding, 2024 © All Rights Reserved</p>
            </div>
        </div>
    );
}
