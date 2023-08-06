import React from 'react'
import { IntroBgImg } from '../utilities/Images.jsx'
import { Layout, Intro, HowItWorks } from '../components'

function Home() {
    return (
        <Layout>
            <Intro />
            <HowItWorks />
        </Layout>
    )
}

export default Home