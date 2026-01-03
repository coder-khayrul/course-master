import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import Container from '../components/ui/Container';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/courses")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data);
            });
    }, [])


    const categories = [...new Set(courses.map(course => course.category))];


    return (
        <section className="py-16">
            <div className='h-80 px-10 bg-linear-120 flex flex-col bg- items-center justify-center bg-container'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-bold mb-8 text-white'>All Courses</h2>
                </div>
                <Breadcrumbs />
            </div>
            <Container>

                <div className="py-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse All Courses</h2>
                    <div className='flex gap-3 flex-wrap'>
                        {
                            categories.map(category => (
                                <button className={"py-2 px-7 text-[14px] border border-border rounded-[50px] hover:border-accent hover:text-accent duration-600 cursor-pointer"}>{category}</button>
                            ))
                        }

                    </div>
                    <div className='grid grid-cols-3 gap-6 py-20'>
                        {
                            courses.map(course => ((
                                <CourseCard course={course} />
                            )))
                        }
                    </div>
                </div>
            </Container>

        </section>

    );
};

export default Courses;