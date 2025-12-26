import React from 'react';
import { LuArrowRight, LuAward, LuBookOpen, LuTvMinimalPlay, LuUsers } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";

import Button from './ui/Button';
const Hero = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-28">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
                        Master New Skills with{' '}
                        <span className="text-gradient">Expert-Led</span> Courses
                    </h1>
                    <p className="text-lg md:text-xl font-light  mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Join thousands of learners advancing their careers with our comprehensive,
                        industry-relevant courses taught by world-class instructors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Button icon={GoArrowRight } btnText={"Explore Courses"} />
                        <Button icon={IoPlayCircleOutline} btnText={"Watch Demo"} />

                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="container mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { icon: LuBookOpen, value: '200+', label: 'Courses' },
                        { icon: LuUsers, value: '50K+', label: 'Students' },
                        { icon: LuAward, value: '98%', label: 'Satisfaction' },
                        { icon: LuTvMinimalPlay, value: '1M+', label: 'Video Hours' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center hover:bg- animate-fade-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                            <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                            <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                            <div className="text-sm ">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;