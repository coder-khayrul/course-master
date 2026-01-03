import React from 'react';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import FreeCourses from '../components/FreeCourses';

const Home = () => {
    return (
        <>
            <Hero/>
            <FeaturedCourses/>
            <FreeCourses />
        </>
    );
};

export default Home;