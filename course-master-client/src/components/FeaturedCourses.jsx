import React from 'react';
import Container from './ui/Container';
import { useState } from 'react';
import { useEffect } from 'react';
import CourseCard from './CourseCard';
import SectionHeader from './ui/SectionHeader';

const FeaturedCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/courses")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data);
            });
    }, [])
    return (
        <section className='py-20'>
            <Container>
                <SectionHeader title1={"Boost Your Skills with"} title2={"Expert Learning"} subtitle={"Top Popular Course"} />
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

export default FeaturedCourses;