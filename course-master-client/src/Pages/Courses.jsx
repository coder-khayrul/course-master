import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import Container from '../components/ui/Container';

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

    return (
        <section className="py-16">
            <Container>
                <div className="container">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse All Courses</h2>

                    {/* Filters */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-8">
                        
                        <div className="flex gap-4">
                            <div className="relative flex-1 lg:w-64">
                                <input type='search' className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <input
                                    placeholder="Search courses..."
                                    
                            
                                    className="pl-10"
                                />
                            </div>
                            <select>
                                    <option value="popular">Most Popular</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
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