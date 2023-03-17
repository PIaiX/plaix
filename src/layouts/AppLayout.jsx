import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from '../components/utils/ScrollToTop'

const AppLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop/>
        </>
    )
}

export default AppLayout