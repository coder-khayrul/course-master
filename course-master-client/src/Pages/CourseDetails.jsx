import React from 'react';
import { LuAward, LuBookOpen, LuCheck, LuClock, LuGlobe, LuPlay, LuSquareArrowLeft, LuUsers } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router';
import { FaStar } from "react-icons/fa";
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import AnimatedBadge from '../components/ui/AnimatedBadge';
import Breadcrumbs from '../components/ui/Breadcrumbs';
const CourseDetails = () => {

    const course = useLoaderData();
    const instructor = {
        "name": "Khayrul Islam",
        "title": "Senior Engineer",
        "bio": "James has over 8 years of experience working with React, Next.js, and modern CSS frameworks.",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop"
    }
    return (
        <>
            <section className=" text-background py-12 border border-border  bg-slate-100">
                <Container>
                    <Breadcrumbs type={"secondary"}/>
                    <div className="grid lg:grid-cols-3 gap-8 mt-5 relative">
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
                        </div>
                        <div className="lg:col-span-1 bg-white ">
                            <div className="sticky top-24">
                                <div className="aspect-video relative">
                                    <img src={course?.thumbnail} alt={course?.title} className="w-full h-full object-cover rounded-t-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                                        <button className="rounded-full h-16 w-16 bg-accent cursor-pointer text-white grid place-items-center group duration-600 border-2 border-transparent hover:border-white">
                                            <LuPlay className="h-6 w-6 group-hover:scale-[1.5] duration-600" /></button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        {
                                            course.price !== 0 ?
                                                <>
                                                    <span className="text-3xl font-bold">${course?.price}</span>
                                                    {
                                                        course?.originalPrice &&
                                                        <span className="text-lg text-muted-foreground line-through">${course?.originalPrice}</span>
                                                    }

                                                </>
                                                : <AnimatedBadge className='text-white'>FREE</AnimatedBadge>
                                        }
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
            <section className='py-15'>
                <Container>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Your Instructor</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className="flex gap-4 p-6 border border-border rounded-lg shadow-custom">
                                <img src={instructor?.avatar} alt={instructor?.name} className="w-20 h-20 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-semibold">{instructor?.name}</h3>
                                    <p class Name="text-second text-sm mb-2">{instructor?.title}</p>
                                    <p className="text-sm">{instructor?.bio}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>

            </section>
        </>
    );
};

export default CourseDetails;