import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-[95%] lg:w-10/12 2xl:w-[1365px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;