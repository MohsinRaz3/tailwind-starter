import React from 'react'

export default function page() {

    return (
        <div className=' flex justify-center flex-wrap-reverse'>
            <div className='flex justify-start bg-slate-500'>
                <h1>Justify-start</h1>
                <h1>Services</h1>
                <h1>Blogs</h1>
                <h1>About us</h1>

            </div>

            <div className='flex justify-end bg-slate-400'>
                <h1>Justify-end</h1>
                <h1>Services</h1>
                <h1>Blogs</h1>
                <h1>About us</h1>

            </div>

            <div className='flex justify-between bg-slate-200'>
                <h1>Justify-between</h1>
                <h1>Services</h1>
                <h1>Blogs</h1>
                <h1>About us</h1>

            </div>


            <div className='flex justify-around bg-slate-100'>
                <h1>Justify-around</h1>
                <h1>Services</h1>
                <h1>Blogs</h1>
                <h1>About us</h1>

            </div>
        </div>
    )
}
