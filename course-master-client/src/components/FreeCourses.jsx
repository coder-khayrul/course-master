import React from 'react';
import SectionHeader from './ui/SectionHeader';
import { useLoaderData } from 'react-router';
import Container from './ui/Container';
import CourseCard from './CourseCard';

const FreeCourses = () => {
       const allCourses = useLoaderData();
    const courses = allCourses.filter(course=> course.isFree === true);


    return (
        <section className='py-15'>
            <Container>
                <SectionHeader title1={"Free Courses Available for"} title2={"Learning This Week"} subtitle={"Limited Offer"} />
                <div className='grid grid-cols-3 gap-6 py-20'>
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

export default FreeCourses;