import React from 'react';

const SectionHeader = ({subtitle,title1,title2}) => {
    return (
        <div className='flex items-center justify-center flex-col w-[50%] mx-auto'>
            <button className="relative inline-flex items-center justify-center rounded-[50px] p-0.5 overflow-hidden group mb-6">
                <span
                    className="absolute inset-0 rounded-[50px]
    bg-[linear-gradient(90deg,var(--color-accent),var(--color-two),var(--color-accent))]
    bg-size-[300%_300%]
    animate-[borderRun_3s_linear_infinite]
    group-hover:[animation-play-state:paused]"
                ></span>
                <span className="relative z-10 rounded-[50px] px-7 py-2 font-medium text-[14px] uppercase bg-indigo-50 text-accent">
                    {subtitle}
                </span>
            </button>
            <h3 className='font-semibold text-[30px] md:text-[42px] text-center leading-12'>{title1} <span className='text-gradient '>{title2}</span> </h3>
        </div>
    );
};

export default SectionHeader;