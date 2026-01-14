import React from 'react';
import { LuPlus, LuSearch } from 'react-icons/lu';
import { Link } from 'react-router';

const ManageCourses = () => {
    
    return (
        <div>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Course Management</h1>

                    {/* Add Course Button */}
                    <Link  to={"/dashboard/admin/add-course"}
                        className="btn btn-primary gap-2"
                    >
                        <LuPlus className="h-4 w-4" />
                        Add Course
                    </Link>
                </div>

                {/* Search */}
                {/* <div className="flex gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-base-content/60" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="input input-bordered w-full pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div> */}

                {/* Modal */}
            </div>

        </div>
    );
};

export default ManageCourses;