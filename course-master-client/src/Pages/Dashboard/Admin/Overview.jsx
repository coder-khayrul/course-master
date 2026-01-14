import React from 'react';
import { LuBookOpen, LuDollarSign, LuTrendingUp, LuUsers } from 'react-icons/lu';
import { StatsCard } from '../../../components/ui/StatsCard';

const Overview = () => {
const courses = [{}];
const students = [{}]
    const totalRevenue = 5.6;
    const totalStudents = 12;
    const totalEnrollments = 433



    return (
        <div>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">Dashboard Overview</h1>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatsCard
                        title="Total Courses"
                        value={courses.length}
                        icon={LuBookOpen}
                        trend={{ value: 12, isPositive: true }}
                    />
                    <StatsCard
                        title="Total Students"
                        value={totalStudents}
                        icon={LuUsers}
                        trend={{ value: 8, isPositive: true }}
                    />
                    <StatsCard
                        title="Enrollments"
                        value={totalEnrollments}
                        icon={LuTrendingUp}
                        trend={{ value: 15, isPositive: true }}
                    />
                    <StatsCard
                        title="Revenue"
                        value={`$${(totalRevenue / 1000).toFixed(1)}K`}
                        icon={LuDollarSign}
                        trend={{ value: 20, isPositive: true }}
                    />
                </div>

                {/* Tables */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Recent Enrollments */}
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title">Recent Enrollments</h2>

                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Student</th>
                                            <th>Course</th>
                                            <th>Progress</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students
                                            ?.slice(0, 5)
                                            .flatMap((s) =>
                                                s.enrolledCourses?.slice(0, 1).map((ec) => {
                                                    const course = courses.find(
                                                        (c) => c.id === ec.courseId
                                                    );

                                                    return (
                                                        <tr key={`${s.id}-${ec.courseId}`}>
                                                            <td className="font-medium">{s.name}</td>
                                                            <td className="max-w-[200px] truncate">
                                                                {course?.title || "Unknown"}
                                                            </td>
                                                            <td>
                                                                <span
                                                                    className={`badge ${ec.progress === 100
                                                                        ? "badge-success"
                                                                        : "badge-ghost"
                                                                        }`}
                                                                >
                                                                    {ec.progress}%
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pending Reviews */}
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title">Pending Reviews</h2>

                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Student</th>
                                            <th>Assignment</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                        {assignmentSubmissions
                                            .filter((s) => s.status === "pending")
                                            .slice(0, 5)
                                            .map((sub) => {
                                                const assignment = assignments.find(
                                                    (a) => a.id === sub.assignmentId
                                                );

                                                return (
                                                    <tr key={sub.id}>
                                                        <td className="font-medium">
                                                            {sub.studentName}
                                                        </td>
                                                        <td className="max-w-[200px] truncate">
                                                            {assignment?.title}
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-warning badge-outline">
                                                                Pending
                                                            </span>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Overview;