'use client';
import React, { useState } from 'react';
import ParentLayout from './ParentLayout';
import ModalForm from './form';

const Gift = ({ packages }: { packages: any }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paackageDetails, setPackageDetails] = useState({
        packageName: packages[currentIndex].packageTitle,
        packageOffer: '',
    });
    const currentPackage = packages[currentIndex];

    const handleNext = () => {
        if (currentIndex < packages.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <ParentLayout>
            <div className="py-12 md:w-7/12 mx-auto text-center" id='gift'>
                <p className="leading-normal:text-4xl font-bold text-3xl ">
                    Thoughtfully curated gifts for every budget
                </p>
                <p className="leading-normal mt-4 text-neutral-gray-100 text-base md:text-xl font-normal">
                    From corporate gifting to holiday surprises, we’ve got you
                    covered with packages that make celebrating your team, loved
                    ones easy and budget friendly.
                </p>
            </div>
            <div className="bg-[#edf1fd] p-4 sm:p-12 mb-12 rounded-md w-full mx-auto max-w-7xl">
                <div className="text-center mb-6">
                    <h1 className="leading-normal:text-4xl font-bold text-3xl ">
                        {currentPackage.packageTitle}
                    </h1>
                    <p className="mt-2 text-xl">{currentPackage.price}</p>
                </div>
                <div className="flex flex-col gap-6">
                    {currentPackage.items.map((item: any) => (
                        <div
                            key={item.value}
                            className={`${
                                item.value === 'provision'
                                    ? 'bg-[#849b51] self-start'
                                    : 'bg-[#f2e8c8] self-end'
                            } px-4 py-8 rounded-md md:w-1/2`}
                        >
                            <ol className="list-decimal flex flex-wrap gap-8 ml-12">
                                {item.value === 'provision' &&
                                    item.itemContent.map(
                                        (content: any, index: number) => (
                                            <li key={index}>{content}</li>
                                        )
                                    )}
                                {item.value === 'food_gourmet' &&
                                    item.itemContent.map(
                                        (content: any, index: number) => (
                                            <li key={index}>{content}</li>
                                        )
                                    )}
                            </ol>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                    >
                        <svg
                            viewBox="0 0 42 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rotate-180 md:w-[42px] w-[24px]"
                        >
                            <line
                                x1="0.998528"
                                y1="12.1666"
                                x2="39.459"
                                y2="12.11"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            ></line>
                            <path
                                d="M27.5127 23.9277C30.0302 20.1514 36.2522 12.5988 40.9995 12.5988"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            ></path>
                            <path
                                d="M27.5127 1C30.0302 4.77632 36.2522 12.3289 40.9995 12.3289"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </button>
                    <ModalForm />
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === packages.length - 1}
                    >
                        <svg
                            viewBox="0 0 42 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="md:w-[42px] w-[24px]"
                        >
                            <line
                                x1="0.998528"
                                y1="12.1666"
                                x2="39.459"
                                y2="12.11"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            ></line>
                            <path
                                d="M27.5127 23.9277C30.0302 20.1514 36.2522 12.5988 40.9995 12.5988"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            ></path>
                            <path
                                d="M27.5127 1C30.0302 4.77632 36.2522 12.3289 40.9995 12.3289"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </ParentLayout>
    );
};

export default Gift;
