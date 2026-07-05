import React from 'react';
import { LuPlus, LuSearch } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router';

const ManageCourses = () => {
    const courseData = useLoaderData();
  
    return (
        <div>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Course Management</h1>

                    {/* Add Course Button */}
                    <Link to={"/dashboard/admin/add-course"}
                        className="btn btn-primary gap-2"
                    >
                        <LuPlus className="h-4 w-4" />
                        Add Course
                    </Link>
                </div>

                {/* Search */}
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Students</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        courseData.map(course => (
                                            <tr>
                                                <td>{course?.title}</td>
                                                <td><span className='border border-gray-200 p-1 rounded-md text-xm'>{course?.category}</span></td>
                                                <td>{course?.enrolledCount}</td>
                                            </tr>
                                        ))
                                    }
                                    <tr>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Modal */}
                </div>

            </div>
        </div>
    );
};

export default ManageCourses;