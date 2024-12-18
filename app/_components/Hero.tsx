'use client';
import React, { useEffect, useState } from 'react';
import ParentLayout from './ParentLayout';
import Image from 'next/image';

const Hero = () => {
    const texts = ['employees', 'clients', 'friends', 'partners'];
  
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(500);
  
    useEffect(() => {
      const currentPhrase = texts[currentPhraseIndex];
      const fullText = currentPhrase;
  
      const handleTyping = () => {
        if (!isDeleting && displayedText !== fullText) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else if (isDeleting && displayedText !== "") {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else if (!isDeleting && displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      };
  
      const typingTimeout = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);


    return (
        <div className="h-screen bg-hero_bg bg-cover bg-no-repeat bg-center text-white pt-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            <ParentLayout>
                <nav className="relative z-20">
                    <Image
                        src={'/logo.png'}
                        alt="Logo"
                        height={220}
                        width={220}
                        className="w-[150px] md:w-[150px]"
                    />
                </nav>
                <section className="flex h-[100%] flex-col justify-end relative z-20">
                    <div className="text-center flex flex-col items-center mt-[80px] px-5">
                        <h1 className="leading-normal text-2xl max-w-[997px] md:text-6xl text-[#bbcf8d] w-full md:leading-[80px] animate-fade-in font-bold pb-4 md:pb-0">
                            🎄 Thoughtfully gift your <br />{' '}
                            <span
                                className={`text-white`}
                            >
                                {displayedText}  <span className="cursor">|</span>
                            </span>
                            <br />
                            this holiday season 🎄
                        </h1>
                        <p className="md:tracking-wider text-base mt-4 font-light md:text-xl text-white md:max-w-[700px] max-w-[426px] md:font-normal">
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
