import React from 'react';
import { LuBookOpen, LuCircleArrowOutUpRight, LuClock, LuStar, LuUsers } from 'react-icons/lu';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {


    return (

        <div id='shine__animate-item' className="hover:shadow-lg transition-all duration-300 group h-full flex flex-col rounded-md overflow-hidden border border-border">
            <div className="relative ">
                <div id={"shine__animate-link"} className='relative block z-2 overflow-hidden' href="">
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-[200px] object-cover group-hover:scale-105 z-1 transition-transform duration-300  "
                    />
                    {course.isFeatured && (
                        <div className="absolute bg-two text-white top-3 left-3 rounded-full text-sm px-3 py-1">Featured</div>
                    )}
                </div>
            </div>
            <div className="p-4 flex-1">
                <div className="flex items-center gap-5 mb-2">
                    <div className="flex items-center gap-4 text-sm text-second">
                        <div className="flex items-center gap-1">
                            <LuStar className="h-4 w-4 fill-warning text-warning" />
                            <span className="font-medium text-foreground">{course.rating}</span>
                            <span>({course.reviewCount?.toLocaleString()})</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <LuUsers className="h-3.5 w-3.5" />
                        <span>{course.enrolledCount?.toLocaleString()}</span>
                    </div>
                </div>

                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {course.title}
                </h3>

                <p className="text-sm text-second line-clamp-2 mb-3">
                    {course.shortDescription}
                </p>
            </div>
            <div className="p-4 py-2 flex items-center justify-between border-t border-t-border mt-auto">
                <div className="flex items-center gap-2">

                    {
                        course.isFree ?
                            <span className="text-sm font-medium text-primary">
                                FREE
                            </span>
                            :
                            course.originalPrice && (
                                <>
                                    <span className="text-sm text-second line-through">
                                        ${course.originalPrice}
                                    </span>
                                    <span className="text-lg font-bold text-primary">
                                        ${course.price}
                                    </span>
                                </>

                            )}

                </div>
                <div className='relative'>
                    <Link to={`/courses/${course.slug}`} className=' uppercase'>
                        <button class="bookmarkBtn">
                            <span class="IconContainer">
                                <LuCircleArrowOutUpRight className='icon'/>
                            </span>
                            <p class="text">Details</p>
                        </button></Link>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;