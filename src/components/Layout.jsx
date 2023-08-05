import React from 'react'
import { Header, Footer } from './index'

function Layout({ children }) {
    return (
        <div className='mx-20'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export {Layout}