import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <LuGraduationCap className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold">CourseMaster</span>
        </Link>
    );
};

export default Logo;