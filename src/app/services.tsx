"use client"
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Services(){
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 1280 },
            items: 3,
        },
        tablet : {
            breakpoint: { max: 1280, min: 1024 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 1024, min: 0 },
            items: 1,
        }
    };

    return (
        <>
            <p className="my-20 text-[rgb(0,72,255)] text-5xl text-center font-semibold scroll-py-24" id="service">Our Services</p>

            <Carousel responsive={responsive} ssr itemClass="px-10" className="mx-10 lg:m-auto max-w-[1700px]" showDots={true} keyBoardControl={true} swipeable={false}> 
                
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
        </>   
    )
}