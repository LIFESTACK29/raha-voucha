import React from 'react';
import ParentLayout from './ParentLayout';
import Image from 'next/image';
const Hero = () => {
    return (
        <div className="h-screen bg-hero_bg bg-cover bg-no-repeat bg-center text-white pt-6 overflow-hidden">
            <ParentLayout>
                <nav>
                    <Image
                        src={'/logo.png'}
                        alt="Logo"
                        height={220}
                        width={220}
                    />
                </nav>
                <section className="flex h-[100%] flex-col justify-end">
                    <div className="text-center flex flex-col items-center mt-[80px] px-5">
                        <h1 className="leading-normal text-4xl max-w-[997px] md:text-6xl text-[#bbcf8d] w-full md:leading-[80px] animate-fade-in font-bold">
                            🎄 Thoughtfully gift your <br />{' '}
                            <span>employees</span>
                            <br />
                            this holiday season 🎄
                        </h1>
                        <p className="leading-normal text-[16px] mt-4 md:text-xl text-[#bbcf8d] md:max-w-[700px] max-w-[426px] text-base font-normal">
                            Celebrate the people who made your year
                            unforgettable with thoughtfully curated hampers &
                            food bundles—delivered free of charge by Raha.
                        </p>
                        <div className="h-[390px] overflow-hidden bottom-0 w-full z-0 flex items-start pointer-events-none mt-auto">
                            <Image
                                src={'/gift.webp'}
                                alt="Gift Image"
                                className="inline-block mt-12 mx-auto w-[303px] lg:w-[450px]"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </section>
            </ParentLayout>
        </div>
    );
};

export default Hero;
