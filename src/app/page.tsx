"use client"
import { useState } from "react";
import Figure1 from "../../public/figure1.svg";
import teacherPhoto from "../../public/Teacher_Photo.jpeg";
import whatsappLogo from "../../public/whatsapp.svg";

import Image from "next/image";

export default function Home() {
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
      {/* <Image src={whatsappLogo} alt="Whatsapp Logo" className="fixed right-0 bottom-0 m-10 w-32" /> */}
      <div className="flex pt-20 pb-24 max-w-[1700px] m-auto">

        <div className="flex justify-between flex-col mr-10 px-10">
          <p className="text-5xl font-bold bg-gradient-to-r from-[rgb(0,72,255)] to-[rgb(214,0,141)] inline-block text-transparent bg-clip-text py-5">Pengajaran Coding Termurah di Indonesia</p>
          
          <p className="text-2xl leading-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at veniam dolorum possimus provident assumenda, distinctio asperiores! Porro voluptatem, atque qui tempore vel quod maiores placeat? Fuga reprehenderit non labore.</p>

          <button className="bg-gradient-to-l from-[rgb(9,21,63)] to-[rgb(0,43,194)] w-fit px-5 py-2 rounded-3xl text-white text-xl">
            Learn More {'-->'}
          </button>

        </div>
          
        <Image src={Figure1} alt="Figure 1" className="ml-10"/>
      </div>               

      <div className="flex bg-[rgb(237,247,255)] p-10 rounded-full max-w-[1700px] m-auto">
        <p className="text-5xl py-24 px-20 m-auto text-[rgb(0,72,255)] font-semibold rounded-l-full bg-white">About Company</p>
        <p className="p-20 text-2xl leading-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, veritatis nostrum aliquam quasi commodi sapiente culpa tenetur molestias reprehenderit perspiciatis eligendi dolor explicabo incidunt soluta corporis voluptates error at laudantium.</p>
      </div>

      <p className="my-20 text-[rgb(0,72,255)] text-5xl text-center font-semibold">Our Services</p>

      <div className="flex justify-center px-36 max-w-[1700px] m-auto ">      

        <div className="grid bg-[rgb(255,245,255)] mx-10 py-10 text-center w-1/3 h-fit">
          <p className="text-xl font-bold text-[rgb(0,43,154)]">Fundamental Website</p>
          <p className="my-5 px-5 ">Learn a basic frontend with HTML, CSS and Javascript</p>
          <p className="text-3xl font-semibold">IDR 100,000<span className="text-base tracking-normal font-semibold">/session</span></p>

          <ul className="my-10 px-5">
            <li className="border-t-2 flex text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-5">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
            </li>
            <li className="border-t-2 flex text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
            </li>
            <li className="flex border-t-2 text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</span>          
            </li>
          </ul>
        </div>

        <div className="grid bg-[rgb(255,245,255)] mx-10 py-10 text-center w-1/3 h-fit">
          
          <p className="text-xl font-bold text-[rgb(0,43,154)]">Fundamental of FullStack</p>
          <p className="my-5 px-5 ">Introduction to Fullstack with PHP, HTML, CSS, </p>
          <p className="text-3xl font-semibold">IDR 200,000<span className="text-base tracking-normal font-semibold">/session</span></p>

          <ul className="my-10 px-5">
            <li className="border-t-2 flex text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-5">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
            </li>
            <li className="border-t-2 flex text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
            </li>
            <li className="flex border-t-2 text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</span>          
            </li>
            <li className="flex border-t-2 text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Choose from more than 15 Professional Certificate programs from industry leaders like Google, Facebook, and more</span>          
            </li>
          </ul>
        </div>

        <div className="grid bg-[rgb(255,245,255)] mx-10 py-10 text-center w-1/3 h-fit">
          <p className="text-xl font-bold text-[rgb(0,43,154)]">Fundamental Database</p>
          <p className="my-5 px-5 ">Learn a basic database and query with mysql, ssms</p>
          <p className="text-3xl font-semibold">IDR 100,000<span className="text-base tracking-normal font-semibold">/session</span></p>

          <ul className="my-10 px-5">
            <li className="border-t-2 flex text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-5">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
            </li>
            <li className="border-t-2 flex text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Diajar oleh pengajar yang berpengalaman</span>
            </li>
            <li className="flex border-t-2 text-left py-5">
              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
              </svg>
              <span className="ml-4">Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</span>          
            </li>
          </ul>
        </div>
      </div>

      <p className="my-20 text-[rgb(0,72,255)] text-5xl text-center font-semibold">Meet Your Teacher</p>
      
      <div className="flex justify-between bg-[rgb(249,249,249)] py-10 px-20 items-center max-w-[1700px] m-auto my-20">
        <div className="text-center">
          <Image src={teacherPhoto} alt="Teacher Photo" className="rounded-full w-[200px] m-auto mb-2"/>
          <p className="text-[rgb(0,43,154)] font-semibold text-2xl">Software Engineer @Bina Nusantara</p>
        </div>
        
        <div className="w-[1000px]">
          <p className="flex text-left py-2">
            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
              <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
            </svg>
            <span className="ml-4 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>          
          </p>

          <p className="flex text-left py-2">
            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
              <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
            </svg>
            <span className="ml-4 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>          
          </p>

        </div>
      </div>

      <div className="flex justify-between bg-[rgb(249,249,249)] py-10 px-20 items-center max-w-[1700px] m-auto my-20">
        <div className="text-center">
          <Image src={teacherPhoto} alt="Teacher Photo" className="rounded-full w-[200px] m-auto mb-2"/>
          <p className="text-[rgb(0,43,154)] font-semibold text-2xl">Software Engineer @Bina Nusantara</p>
        </div>
        
        <div className="w-[1000px]">
          <p className="flex text-left py-2">
            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
              <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
            </svg>
            <span className="ml-4 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>          
          </p>

          <p className="flex text-left py-2">
            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
              <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
            </svg>
            <span className="ml-4 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>          
          </p>

        </div>
      </div>

      <div className="flex justify-between bg-[rgb(249,249,249)] py-10 px-20 items-center max-w-[1700px] m-auto my-20">
        <div className="text-center">
          <Image src={teacherPhoto} alt="Teacher Photo" className="rounded-full w-[200px] m-auto mb-2"/>
          <p className="text-[rgb(0,43,154)] font-semibold text-2xl">Software Engineer @Bina Nusantara</p>
        </div>
        
        <div className="w-[1000px]">
          <p className="flex text-left py-2">
            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
              <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
            </svg>
            <span className="ml-4 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>          
          </p>

          <p className="flex text-left py-2">
            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-4" className="w-10">
              <path fillRule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
            </svg>
            <span className="ml-4 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio mollitia aperiam sit voluptatum quis ratione ut est veritatis earum architecto, maiores quisquam sunt nulla voluptas id natus vitae deleniti veniam!</span>          
          </p>
        </div>
      </div>

      <p className="my-20 text-[rgb(0,72,255)] text-5xl text-center font-semibold">Frequently ask questions</p>
      
      <div className="max-w-[1700px] m-auto">
        <div className="border border-black my-10">
          <button className="text-left flex py-7 text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick}>
            <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
            Can i Get Free Trial ?
          </button>
          <p className={`px-8 text-2xl pb-5 bg-[rgb(239,247,255)] ${isShown ? `block ` : `hidden absolute`}`}>Yes! We have two options, depending on which payment plan you choose. <br /><br />If you opt to make monthly payments, you can take advantage of a 7-day free trial to experience learning with Coursera Plus before you decide to purchase. We do capture your payment information when you subscribe, but you won&apos;t be charged until the end of your 7-day free trial. So, if you decide Coursera Plus isn&apos;t right for you, just cancel during the trial period and there will be no charge.</p>
        </div>

        <div className="border border-black">
          <button className="text-left flex py-7 text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick1}>
            <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown1 ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
            Can i Get Free Trial ?
          </button>
          <p className={`px-8 text-2xl pb-5 bg-[rgb(239,247,255)] ${isShown1 ? `block ` : `hidden absolute`}`}>Yes! We have two options, depending on which payment plan you choose. <br /><br />If you opt to make monthly payments, you can take advantage of a 7-day free trial to experience learning with Coursera Plus before you decide to purchase. We do capture your payment information when you subscribe, but you won&apos;t be charged until the end of your 7-day free trial. So, if you decide Coursera Plus isn&apos;t right for you, just cancel during the trial period and there will be no charge.</p>
        </div>
          
          
      </div>

      <p className="my-20 text-[rgb(0,72,255)] text-5xl text-center font-semibold">Find Us On</p>
    </div>
    
  );
}
