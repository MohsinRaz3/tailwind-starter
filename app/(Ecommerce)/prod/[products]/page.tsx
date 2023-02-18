import React from 'react'

export default function page({ params }: { params: { products: string } }) {
    return (
        <div>
            <h1 className='text-2xl'>Products' Home</h1>
            <p> This is product is: {params.products}</p>
        </div>
    )
}
