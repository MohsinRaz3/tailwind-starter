import React from 'react'
import Image from 'next/image'

export default function
    () {
    return (
        <div className='flex justify-center'>
            <div className='order-last self-center'> <Image src={"/panalogo.png"} width={240} height={240} alt="logo" /></div>

            <div className='py-20'>
                <h1>Welcome to Panaverse</h1>
                <h2>A community of web3 and metaverse developers</h2>
                <button className='my-4 px-4 py-2'> more info</button>
            </div>
        </div>
    )
}
