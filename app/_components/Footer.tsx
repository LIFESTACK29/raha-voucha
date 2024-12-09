import React from 'react';
import ParentLayout from './ParentLayout';

const Footer = () => {
    return (
        <div className=" bg-hero_bg bg-cover bg-no-repeat bg-center text-white pt-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            <ParentLayout>
                <section className="py-8 relative z-20">
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl mb-2">
                            Make this holiday unforgettable 🎄
                        </h1>
                        <p>
                            No stress. No fuss. Just happiness wrapped in a
                            hamper and delivered with care 💚
                        </p>
                        <a href="#gift" className=" bg-[#bbcf8d] text-black py-3 px-6 rounded block w-fit mx-auto mt-6">
                            Choose a package
                        </a>
                    </div>
                    <div className="my-4 text-center">
                        <h5 className="text-xl md:text-2xl mb-2">
                            Happy Holidays From Us❤
                        </h5>
                        <a href="mailto:contact@useraha.com">
                            Get in touch at contact@useraha.com
                        </a>
                    </div>
                </section>
            </ParentLayout>
        </div>
    );
};

export default Footer;
