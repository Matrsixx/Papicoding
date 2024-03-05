"use client"
import Figure1 from "../../public/figure1.svg";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import teacherPhoto from "../../public/Teacher_Photo.jpeg";
import linkedinLogo from "../../public/linkedin_logo.svg";
import instagramLogo from "../../public/instagram_logo.svg";
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

    const handleClick = () => {
        isShown ? setIsShown(false) : setIsShown(true);
    }

    const handleClick1 = () => {
        isShown1 ? setIsShown1(false) : setIsShown1(true);
    }

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

                <Image src={Figure1} alt="Figure 1" className="w-1/2 m-auto pt-6" />
            </div>

            <div className="bg-[rgb(237,247,255)] mt-14 text-center px-10 py-10 xl:py-14 2xl:py-20" id="about">
                <p className="text-[rgb(0,72,255)] max-w-[1700px] m-auto font-semibold mb-5 text-2xl lg:text-4xl 2xl:text-5xl 2xl:mb-10">About Company</p>
                <p className="text-sm text-justify m-auto text-md max-w-[1700px] lg:text-xl lg:px-14 xl:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veritatis nostrum aliquam quasi commodi sapiente culpa tenetur molestias reprehenderit perspiciatis eligendi dolor explicabo incidunt soluta corporis voluptates error at laudantium.</p>
            </div>

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold scroll-py-24" id="service">Our Services</p>

            <Carousel responsive={responsive} ssr itemClass="md:px-10" className="mx-10 lg:m-auto max-w-[1700px]" showDots={true} keyBoardControl={true} swipeable={true}>
                <div className="grid bg-[rgb(255,245,255)] py-10 text-center w-full h-fit">
                    <p className="text-xl font-bold text-[rgb(0,43,154)]">Fundamental Website</p>
                    <p className="my-5 px-5 ">Learn a basic frontend with HTML, CSS and Javascript</p>
                    <p className="text-3xl font-semibold">IDR 100,000<span className="text-base tracking-normal font-semibold">/session</span></p>

                    <p className="mt-5 mx-6 py-3 border border-[rgb(0,72,255)] text-[rgb(0,72,255)] font-semibold rounded-lg">Beli Sekarang!</p>

                    <ul className="my-10 px-5">
                        <li className="border-t-2 flex text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-5">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="border-t-2 flex text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</span>
                        </li>
                    </ul>
                </div>

                <div className="grid bg-[rgb(255,245,255)] py-10 text-center w-full h-fit border-2 border-[rgb(0,43,154)]">

                    <p className="text-xl font-bold text-[rgb(0,43,154)]">Fundamental of FullStack</p>
                    <p className="my-5 px-5 ">Introduction to Fullstack with PHP, HTML, CSS, </p>
                    <p className="text-3xl font-semibold">IDR 200,000<span className="text-base tracking-normal font-semibold">/session</span></p>

                    <p className="mt-5 mx-6 py-3 bg-[rgb(0,72,255)] text-white font-semibold rounded-lg">Beli Sekarang! Best deal</p>

                    <ul className="my-10 px-5">
                        <li className="border-t-2 flex text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-5">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="border-t-2 flex text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Choose from more than 15 Professional Certificate programs from industry leaders like Google, Facebook, and more</span>
                        </li>
                    </ul>
                </div>

                <div className="grid bg-[rgb(255,245,255)] py-10 text-center w-full h-fit">
                    <p className="text-xl font-bold text-[rgb(0,43,154)]">Fundamental Database</p>
                    <p className="my-5 px-5 ">Learn a basic database and query with mysql, ssms</p>
                    <p className="text-3xl font-semibold">IDR 100,000<span className="text-base tracking-normal font-semibold">/session</span></p>

                    <p className="mt-5 mx-6 py-3 border border-[rgb(0,72,255)] text-[rgb(0,72,255)] font-semibold rounded-lg">Beli Sekarang!</p>

                    <ul className="my-10 px-5">
                        <li className="border-t-2 flex text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-5">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="border-t-2 flex text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
                        </li>
                        <li className="flex border-t-2 text-left py-5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4">Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</span>
                        </li>
                    </ul>
                </div>
            </Carousel>;

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold" id="teacher">Meet Your Teacher</p>

            <div className="bg-[rgb(249,249,249)]">
                <div className="flex justify-between  py-10 px-6 items-center max-w-[1700px] m-auto my-20 relative xl:justify-center">
                    <div className="text-center">
                        <Image src={teacherPhoto} alt="Teacher Photo" className="rounded-full md:w-2/3 m-auto mb-2" />
                        <p className="text-[rgb(0,43,154)] font-semibold text-[12px] md:text-base lg:text-lg xl:text-xl">Software Engineer @Bina Nusantara</p>
                    </div>

                    <div className="w-[800px] px-4">
                        <p className="flex text-left py-2">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4 text-justify md:text-left text-[10px] md:text-base lg:text-lg xl:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>
                        </p>

                        <p className="flex text-left py-2">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4 text-justify md:text-left text-[10px] md:text-base lg:text-lg xl:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>

                        </p>
                    </div>
                    <Image src={linkedinLogo} alt="Linkedin Logo" className="w-7 absolute right-3 bottom-3 lg:w-10" />
                </div>
            </div>

            <div className="bg-[rgb(249,249,249)]">
                <div className="flex justify-between  py-10 px-6 items-center max-w-[1700px] m-auto my-20 relative xl:justify-center">
                    <div className="text-center">
                        <Image src={teacherPhoto} alt="Teacher Photo" className="rounded-full md:w-2/3 m-auto mb-2" />
                        <p className="text-[rgb(0,43,154)] font-semibold text-[12px] md:text-base lg:text-lg xl:text-xl">Software Engineer @Bina Nusantara</p>
                    </div>

                    <div className="w-[800px] px-4">
                        <p className="flex text-left py-2">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4 text-justify md:text-left text-[10px] md:text-base lg:text-lg xl:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>
                        </p>

                        <p className="flex text-left py-2">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4 text-justify md:text-left text-[10px] md:text-base lg:text-lg xl:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>

                        </p>
                    </div>
                    <Image src={linkedinLogo} alt="Linkedin Logo" className="w-7 absolute right-3 bottom-3 lg:w-10" />
                </div>
            </div>

            <div className="bg-[rgb(249,249,249)]">
                <div className="flex justify-between  py-10 px-6 items-center max-w-[1700px] m-auto my-20 relative xl:justify-center">
                    <div className="text-center">
                        <Image src={teacherPhoto} alt="Teacher Photo" className="rounded-full md:w-2/3 m-auto mb-2" />
                        <p className="text-[rgb(0,43,154)] font-semibold text-[12px] md:text-base lg:text-lg xl:text-xl">Software Engineer @Bina Nusantara</p>
                    </div>

                    <div className="w-[800px] px-4">
                        <p className="flex text-left py-2">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4 text-justify md:text-left text-[10px] md:text-base lg:text-lg xl:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>
                        </p>

                        <p className="flex text-left py-2">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-4 text-justify md:text-left text-[10px] md:text-base lg:text-lg xl:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>

                        </p>
                    </div>
                    <Image src={linkedinLogo} alt="Linkedin Logo" className="w-7 absolute right-3 bottom-3 lg:w-10" />
                </div>
            </div>

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold" id="faq">Frequently ask questions</p>

            <div className="max-w-[1700px] mx-3 2xl:mx-auto">
                <div className="border border-black my-10">
                    <button className="text-left flex py-4 md:py-7 text-base md:text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick}>
                        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fillRule="evenodd" clipRule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
                        Can i Get Free Trial ?
                    </button>
                    <p className={`px-8 text-md pb-5 bg-[rgb(239,247,255)] ${isShown ? `block ` : `hidden absolute`} lg:text-lg xl:text-xl`}>Yes! We have two options, depending on which payment plan you choose. <br /><br />If you opt to make monthly payments, you can take advantage of a 7-day free trial to experience learning with Coursera Plus before you decide to purchase. We do capture your payment information when you subscribe, but you won&apos;t be charged until the end of your 7-day free trial. So, if you decide Coursera Plus isn&apos;t right for you, just cancel during the trial period and there will be no charge.</p>
                </div>

                <div className="border border-black">
                    <button className="text-left flex py-4 md:py-7 text-base md:text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick1}>
                        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown1 ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fillRule="evenodd" clipRule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
                        Can i Get Free Trial ?
                    </button>
                    <p className={`px-8 text-md pb-5 bg-[rgb(239,247,255)] ${isShown1 ? `block ` : `hidden absolute`} lg:text-lg xl:text-xl`}>Yes! We have two options, depending on which payment plan you choose. <br /><br />If you opt to make monthly payments, you can take advantage of a 7-day free trial to experience learning with Coursera Plus before you decide to purchase. We do capture your payment information when you subscribe, but you won&apos;t be charged until the end of your 7-day free trial. So, if you decide Coursera Plus isn&apos;t right for you, just cancel during the trial period and there will be no charge.</p>
                </div>
            </div>

            <p className="my-20 text-[rgb(0,72,255)] text-2xl md:text-5xl text-center font-semibold">Find Us On</p>

            <div className="flex justify-center max-w-[1700px] mx-auto pb-20">
                <Image src={linkedinLogo} alt="Linkedin Logo" className="w-12 md:w-16 xl:w-20 mx-10" />
                <Image src={instagramLogo} alt="Linkedin Logo" className="w-12 md:w-16 xl:w-20" />
                <Image src={whatsappLogo} alt="Linkedin Logo" className="w-12 md:w-16 xl:w-20 mx-10" />
            </div>

            <div className="w-full bg-[rgb(51,51,51)] py-5">
                <p className="text-sm md:text-base text-center text-white">Papicoding, 2024 © All Rights Reserved</p>
            </div>
        </div>
    );
}
