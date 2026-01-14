import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import Container from '../components/ui/Container';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { useLoaderData } from 'react-router';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Courses = () => {
    const [courses, setCourses] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const totalCourses = useLoaderData();

    const totalPages = Math.ceil(totalCourses / itemsPerPage)

    const pages = [...Array(totalPages).keys()];
    const handlePerPageItems = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleNextItems = () => {
        if (currentPage+1 <= totalPages) {
            setCurrentPage(++currentPage);
        }
    }
    const handlePrevItems = () => {
        if (currentPage-1 > 0) {
            setCurrentPage(--currentPage);
        }
    }
    useEffect(() => {
        fetch(`https://course-master-server.vercel.app/courses/?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            });
    }, [currentPage,itemsPerPage])


    const categories = [...new Set(courses.map(course => course.category))];


    return (
        <section className="pb-16">
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
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 sm:gap-6 py-20 px-5 sm:px-0'>
                        {
                            courses.map(course => ((
                                <CourseCard course={course} />
                            )))
                        }
                    </div>
                    <div className='pagination flex items-center'>
                        <div className="join flex items-center justify-left mx-auto">
                            <button onClick={handlePrevItems} className='w-10 h-10 grid place-items-center bg-gray-100 hover:bg-indigo-700 hover:text-white duration-500 border border-border '>
                                <GoArrowLeft className='h-5 w-5' />
                            </button>
                            {pages.map((_, index) => {
                                const pageNumber = index + 1;

                                return (
                                    <input
                                        key={pageNumber}
                                        className="join-item btn btn-square"
                                        type="radio"
                                        name="options"
                                        aria-label={pageNumber}
                                        checked={currentPage === pageNumber}
                                        onChange={() => setCurrentPage(pageNumber)}
                                    />
                                );
                            })}
                            <button onClick={handleNextItems} className='w-10 h-10 grid place-items-center bg-gray-100 hover:bg-indigo-700 hover:text-white duration-500 border border-border '>
                                <GoArrowRight className='h-5 w-5' />
                            </button>
                        </div>
                        <form className='flex justify-left items-center gap-2'>
                            <h3>Item Per Page:</h3>
                            <select
                                className="select select-bordered w-20"
                                value={itemsPerPage}
                                onChange={handlePerPageItems}
                            >
                                <option value={2}>2</option>
                                <option value={4}>4</option>
                                <option value={6}>6</option>
                                <option value={8}>8</option>
                                <option value={10}>10</option>
                            </select>
                        </form>

                    </div>


                </div>
            </Container>

        </section>

    );
};

export default Courses;