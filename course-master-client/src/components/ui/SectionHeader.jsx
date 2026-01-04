import React from 'react';

const SectionHeader = ({subtitle,title1,title2}) => {
    return (
        <div className='flex items-center justify-center flex-col w-11/12 md:w-[50%] mx-auto'>
            <button className="relative inline-flex items-center justify-center rounded-[50px] p-0.5 overflow-hidden group mb-3 md:mb-6">
                <span
                    className="absolute inset-0 rounded-[50px]
    bg-[linear-gradient(90deg,var(--color-accent),var(--color-two),var(--color-accent))]
    bg-size-[300%_300%]
    animate-[borderRun_3s_linear_infinite]
    group-hover:[animation-play-state:paused]"
                ></span>
                <span className="relative z-10 rounded-[50px] px-4 py-1 md:px-7 md:py-2 font-medium text-[12px] md:text-[14px] uppercase bg-indigo-50 text-accent">
                    {subtitle}
                </span>
            </button>
            <h3 className='font-semibold text-[25px] md:text-[30px] lg:text-[42px] text-center leading-10 md:leading-12'>{title1} <br/><span className='text-gradient '>{title2}</span> </h3>
        </div>
    );
};

export default SectionHeader;