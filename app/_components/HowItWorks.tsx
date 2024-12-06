import React from 'react';
import ParentLayout from './ParentLayout';

const HowItWorks = () => {
    return (
        <div className="bg-[#bbcf8d]">
            <ParentLayout>
            <div className="py-12 md:w-7/12 mx-auto text-center">
                <p className="leading-normal:text-4xl font-bold text-3xl ">
                    How It Works
                </p>
            </div>
        </ParentLayout>
        </div>
    );
};

export default HowItWorks;
