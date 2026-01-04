import React from 'react';
import Container from './ui/Container';
import CourseCard from './CourseCard';
import SectionHeader from './ui/SectionHeader';
import { useLoaderData } from 'react-router';

const FeaturedCourses = () => {
    const allCourses = useLoaderData();
    const courses = allCourses.filter(course=> course.isFeatured === true);


    return (
        <section className='py-15'>
            <Container>
                <SectionHeader title1={"Boost Your Skills with"} title2={"Featured Courses"} subtitle={"Top Popular Course"} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-20'>
                    {
                        courses.map(course => ((
                            <CourseCard course={course} />
                        )))
                    }
                </div>
            </Container>
        </section>
    );
};

export default FeaturedCourses;