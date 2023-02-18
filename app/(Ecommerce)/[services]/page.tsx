import React from 'react'

export default function page({ params }: { params: { services: string } }) {
    return (
        <div><h1 className='text-xl'>Services' Page</h1>
            <p> We provide services of : {params.services}</p>
        </div>
    )
}
