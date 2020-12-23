import React from 'react'
import { Navbar } from './Navbar'
import { Product } from './Product'
import '../css/Home.css'
export const Home = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Product />
        </div>
    )
}
