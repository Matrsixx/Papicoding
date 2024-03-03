"use client"
import { useState } from "react";

export default function Question(){
    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);

    const handleClick = () => {
        isShown ? setIsShown(false) : setIsShown(true);      
    }
    
    const handleClick1 = () => {
        isShown1 ? setIsShown1(false) : setIsShown1(true);
    }
    return (
        <>
            <p className="my-20 text-[rgb(0,72,255)] text-5xl text-center font-semibold" id="faq">Frequently ask questions</p>
      
            <div className="max-w-[1700px] mx-10 2xl:mx-auto">
                <div className="border border-black my-10">
                <button className="text-left flex py-7 text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick}>
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fillRule="evenodd" clipRule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
                    Can i Get Free Trial ?
                </button>
                <p className={`px-8 text-md pb-5 bg-[rgb(239,247,255)] ${isShown ? `block ` : `hidden absolute`} lg:text-lg xl:text-xl`}>Yes! We have two options, depending on which payment plan you choose. <br /><br />If you opt to make monthly payments, you can take advantage of a 7-day free trial to experience learning with Coursera Plus before you decide to purchase. We do capture your payment information when you subscribe, but you won&apos;t be charged until the end of your 7-day free trial. So, if you decide Coursera Plus isn&apos;t right for you, just cancel during the trial period and there will be no charge.</p>
                </div>

                <div className="border border-black">
                <button className="text-left flex py-7 text-2xl w-full px-5 bg-[rgb(239,247,255)] font-semibold" onClick={handleClick1}>
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className={`w-10 translate-y-1 ${isShown1 ? `rotate-90` : `rotate-0`}`} id="cds-react-aria-10"><path fillRule="evenodd" clipRule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
                    Can i Get Free Trial ?
                </button>
                <p className={`px-8 text-md pb-5 bg-[rgb(239,247,255)] ${isShown1 ? `block ` : `hidden absolute`} lg:text-lg xl:text-xl`}>Yes! We have two options, depending on which payment plan you choose. <br /><br />If you opt to make monthly payments, you can take advantage of a 7-day free trial to experience learning with Coursera Plus before you decide to purchase. We do capture your payment information when you subscribe, but you won&apos;t be charged until the end of your 7-day free trial. So, if you decide Coursera Plus isn&apos;t right for you, just cancel during the trial period and there will be no charge.</p>
                </div>       
            </div>
        </>
      
    )
}