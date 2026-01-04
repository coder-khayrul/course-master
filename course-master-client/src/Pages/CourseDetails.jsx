import React from 'react';
import { LuAward, LuBookOpen, LuCheck, LuClock, LuGlobe, LuPlay, LuSquareArrowLeft, LuUsers } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router';
import { FaStar } from "react-icons/fa";
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
const CourseDetails = () => {

   const course = useLoaderData();
   console.log(course)
    return (
        <>
            <section className=" text-background py-12 border border-border">
                <Container>
                    <Link to="/" className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-6">
                        <LuSquareArrowLeft className="h-4 w-4" /> Back to Courses
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-8 ">
                        <div className="lg:col-span-2">
                            <div className="mb-4 bg-accent text-white py-0.5 px-2 text-sm font-medium rounded-md inline-block">{course?.category}</div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course?.title}</h1>
                            <p className="text-[14px] md:text-[16px] text-second mb-6 font-normal">{course?.description}</p>
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <FaStar className='h-4 w-4 text-yellow-500' />
                                    <span className="font-medium">{course.rating}</span>
                                    <span className="text-background/60">({course?.reviewCount?.toLocaleString()} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 text-background/80">
                                    <LuUsers className="h-4 w-4" />
                                    <span>{course?.enrolledCount?.toLocaleString()} students</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src={course?.instructor?.avatar} alt={course.instructor?.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-medium">Created by {course?.instructor?.name}</p>
                                    <p className="text-sm text-background/60">{course?.instructor?.title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <div className="aspect-video relative">
                                    <img src={course?.thumbnail} alt={course?.title} className="w-full h-full object-cover rounded-t-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                                        <button size="lg" className="rounded-full h-16 w-16">
                                            <LuPlay className="h-6 w-6" /></button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl font-bold">${course?.price}</span>
                                        {course?.originalPrice && (
                                            <span className="text-lg text-muted-foreground line-through">${course?.originalPrice}</span>
                                        )}
                                    </div>
                                    <button className="w-full bg-accent text-white rounded-md py-3 font-medium hover:opacity-90 mb-3 text-sm duration-600 cursor-pointer" size="lg">Enroll Now</button>
                                    <button className="w-full bg-white border border-border text-accent rounded-md py-3 font-medium hover:opacity-90 duration-600 cursor-pointer" >Add to Wishlist</button>
                                    <div className="mt-6 space-y-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <LuClock className="h-4 w-4 text-muted-foreground" />{course.duration} of content</div>
                                        <div className="flex items-center gap-2">
                                            <LuBookOpen className="h-4 w-4 text-muted-foreground" />{course.totalLessons} lessons</div>
                                        <div className="flex items-center gap-2">
                                            <LuAward className="h-4 w-4 text-muted-foreground" />Certificate of completion</div>
                                        <div className="flex items-center gap-2">
                                            <LuGlobe className="h-4 w-4 text-muted-foreground" />Lifetime access</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
            <section className='py-15'>
                <Container>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            {course.learningOutcomes?.map((outcome, i) => (
                                <div key={i} className="flex gap-3"><LuCheck className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /><span>{outcome}</span></div>
                            ))}
                        </div>
                    </div>
                </Container>

            </section>
        </>
    );
};

export default CourseDetails;