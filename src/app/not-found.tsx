import Link from 'next/link'

export default function NotFound(){
    return (
        <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <p className='text-5xl'>404</p>
            <h2 className='mb-5'>Not Found</h2>
            <Link href="/" className="mx-6 py-2 px-2 bg-[rgb(0,72,255)] text-white font-semibold rounded-lg">Return Home</Link>
        </div> 
    )
}