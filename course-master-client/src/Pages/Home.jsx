import React from 'react';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import FreeCourses from '../components/FreeCourses';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <>
            <Hero/>
            <Categories/>
            <FeaturedCourses/>
            <FreeCourses />
        </>
    );
};

export default Home;