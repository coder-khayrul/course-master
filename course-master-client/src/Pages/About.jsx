import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const About = () => {
    return (
        <div>
            <div className='h-80 px-10 bg-linear-120 flex flex-col bg- items-center justify-center bg-container'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-bold mb-8 text-white'>About Us</h2>
                </div>
                <Breadcrumbs />
            </div>
            I'm About Page here
        </div>
    );
};

export default About;