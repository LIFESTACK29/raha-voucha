import React from 'react';
import Hero from './_components/Hero';
import Gift from './_components/Gift';
import HowItWorks from './_components/HowItWorks';
import { examplePackages } from '@/utils/packages';

const Home = () => {
    return (
        <>
            <Hero />
            <Gift packages={examplePackages} />
            <HowItWorks />
        </>
    );
};

export default Home;
