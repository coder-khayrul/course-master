import React from 'react';
import Container from './ui/Container';
import { useLoaderData } from 'react-router';
import SectionHeader from './ui/SectionHeader';

const Categories = () => {
    const courses = useLoaderData();
    const categoryCounts = courses.reduce((acc, course) => {
        acc[course.category] = (acc[course.category] || 0) + 1;
        return acc;
    }, {});
    return (
        <section className='py-15 pt-20'>
            <Container>
                <SectionHeader subtitle={"All Categories"} title1={"Explor Our Categories"} title2={"Choose One"} />
                <div className="flex flex-wrap justify-center gap-6 pt-15">
                    {Object.entries(categoryCounts).map(([category, count]) => (
                        <div
                            key={category}
                            className="group relative py-5 px-10 text-[14px] font-medium border border-border rounded-[50px] 
             flex flex-col cursor-pointer
             transition-colors duration-300 bg-accent/5"
                        >
                            <div
                                className="absolute inset-0 bg-accent 
               scale-0 origin-top-right
               group-hover:scale-100
               transition-transform duration-500 ease-out
               rounded-[50px]"
                            />
                            <h3
                                className="relative z-10 transition-colors duration-300
               group-hover:text-white"
                            >
                                {category}
                            </h3>
                            <span
                                className="absolute -top-4 -right-2 w-7 h-7 rounded-full 
               bg-accent text-white text-md grid place-items-center
               transition-all duration-500 ease-in-out group-hover:right-[37%] group-hover:top-[50%] group-hover:-translate-[50%]
               group-hover:scale-[4] group-hover:font-bold group-hover:bg-transparent text-stroke z-1">
                                {count}
                            </span>
                        </div>

                    ))}
                </div>
            </Container>
        </section>

    );
};

export default Categories;