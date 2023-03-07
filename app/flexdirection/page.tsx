import React from 'react'
import Image from 'next/image'
export default function page() {
    return (
        <div>
            <div className="wrapper flex flex-col justify-center " >
                <a href="#" className="link login-link">Login</a>
                <a href="#" className="link signup-link">Create account</a>
            </div>

            <div className='card flex flex-col justify-between items-start bg-white w-72 h-80 p-8 rounded-xl mt-20 mx-auto'>
                <Image src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg" alt="quote" height='20' width='40' />
                <p>I just finished my trial period and was so amazed with the support and good results that I purchased the Pro version for my business.</p>
                <span>John Doe</span>
            </div>
        </div>
    )
}
