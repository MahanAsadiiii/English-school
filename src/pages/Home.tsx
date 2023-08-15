// import React from 'react'
import { Layout, Intro, HowItWorks, AboutUsSec, PackageSec, DownloadSec } from '../components'


function Home() {
    return (
        <Layout>
            <Intro />
            <HowItWorks />
            <AboutUsSec/>
            <PackageSec/>
            <DownloadSec/>
        </Layout>
    )
}

export {Home}