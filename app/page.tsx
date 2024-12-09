import React from 'react';
import Hero from './_components/Hero';
import Gift from './_components/Gift';
import HowItWorks from './_components/HowItWorks';
import { examplePackages } from '@/utils/packages';
import Faq from './_components/Faq';
import Footer from './_components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Gift packages={examplePackages} />
            <HowItWorks />
            <Faq />
            <Footer />
        </>
    );
};

export default Home;
