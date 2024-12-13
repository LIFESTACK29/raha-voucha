import React from 'react';
import ParentLayout from './ParentLayout';
import Image from 'next/image';

const HowItWorks = () => {
    const howItWorks: { key: number; name: string; desc: string }[] = [
        {
            key: 1,
            name: '💚 Select a Voucha package',
            desc: 'Choose from our curated hamper and food bundle packages or customize one to suite your recipient at no extra cost.',
        },
        {
            key: 2,
            name: '📝 Add a note',
            desc: 'Select from our thoughtfully crafted holiday messages or write your own heartfelt note to make your recipient feel truly special.',
        },
        {
            key: 3,
            name: '✨ Sit back and Relax',
            desc: "We'll deliver straight to their doorstep while you enjoy the credit for being awesome, all for free. No stress, just happy vibes!",
        },
    ];
    return (
        <section className="bg-primaryColor text-primaryColorText">
            <ParentLayout>
                <section className="py-12 mx-auto flex gap-4 md:flex-row flex-col">
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
                        <h1 className="leading-normal:text-4xl font-bold text-3xl mb-8">
                            This is how it works
                        </h1>

                        <Image
                            src={'/gift-package.png'}
                            width={600}
                            height={600}
                            priority
                            alt="gift-basket"
                            className="hidden md:block"
                        />
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col items-center md:items-start justify-center space-y-12 mb-14 md:mb-0">
                        {howItWorks.map((element) => (
                            <div
                                key={element.key}
                                className="w-[90%] md:w-[500px] space-y-3 "
                            >
                                <h1 className="text-xl font-medium">
                                    {' '}
                                    {element.name}
                                </h1>{' '}
                                <p className="text-lg font-light leading-loose tracking-normal">
                                    {element.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center md:hidden">
                        <Image
                            src={'/gift-basket.png'}
                            width={300}
                            height={400}
                            priority
                            alt="gift-basket"
                        />
                    </div>
                </section>
            </ParentLayout>
        </section>
    );
};

export default HowItWorks;
