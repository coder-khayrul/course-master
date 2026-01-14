import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import TextArea from '../../../components/ui/TextArea';
import Button from '../../../components/ui/Button';

const AddCourse = () => {

    const courses = useLoaderData();
    const categories = [...new Set(courses.map(course => course.category))];
    const instructors = [...new Set(courses.map(course => course.instructor.name))]
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();


    const onSubmit = async (data) => {
        try {
            const imageFile = data.thumbnail[0];

            const imageForm = new FormData();
            imageForm.append("image", imageFile);

            const imgRes = await fetch(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_key}`,
                {
                    method: "POST",
                    body: imageForm,
                }
            );

            const imgData = await imgRes.json();

            if (!imgData.success) {
                throw new Error("Image upload failed");
            }

            const imageUrl = imgData.data.url;

            const baseSlug = data.title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-");

            let slug = baseSlug;
            let count = 1;

            const existingSlugs = courses.map(course => course.slug);

            while (existingSlugs.includes(slug)) {
                slug = `${baseSlug}-${count}`;
                count++;
            }

            const tags = data.tags.split(",").map(tag=>tag.trim());
            const courseData = {
                title: data.title,
                slug: slug,
                category: data.category,
                description: data.description,
                price: data.price,
                duration: data.duration,
                level: data.level,
                instructor: data.instructor,
                thumbnail: imageUrl,
                rating: 0,
                reviewCount: 0,
                enrollCount: 0,
                tags: tags
            };

            const res = await fetch("http://localhost:3000/add-course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(courseData),
            });

            if (!res.ok) {
                throw new Error("Failed to save course");
            }

            Swal.fire({
                icon: 'success',
                title: ` Successfully Couse Added`,
                text: "Authentication complete. Welcome to your learning space",

            });

            reset();
        } catch (error) {
            console.error("Course creation failed:", error);
        }
    };


    return (
        <div className="bg-white p-5 rounded-2xl">
            <h3 className="font-bold text-lg">Create New Course</h3>
            <p className="text-sm text-base-content/70 mb-4">
                Fill in the details to create a new course.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                {/* Title & Category */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input label="Course Title" type="text"
                            className={` w-full ${errors.title ? "input-error" : ""
                                }`}
                            {...register("title", { required: "Title is required" })} />
                        {errors.title && (
                            <p className="text-error text-xs mt-1">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Select label="Select category"
                            className={` w-full ${errors.category ? "select-error" : ""
                                }`}
                            {...register("category", {
                                required: "Category is required",
                            })}
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </Select>
                        {errors.category && (
                            <p className="text-error text-xs mt-1">
                                {errors.category.message}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <Input
                        label="Course Thumbnail"
                        type="file"
                        accept="image/*"
                        className={`file-input h-auto file-input-primary w-full ${errors.thumbnail ? "file-input-error" : ""
                            }`}
                        {...register("thumbnail", {
                            required: "Course thumbnail is required",
                            validate: {
                                fileType: (files) =>
                                    ["image/jpeg", "image/png", "image/webp"].includes(
                                        files[0]?.type
                                    ) || "Only JPG, PNG, or WEBP images are allowed",
                            },
                        })}
                    />
                </div>
                {/* Description */}
                <div>
                    <TextArea label="Description"
                        className={` w-full ${errors.description ? "textarea-error" : ""
                            }`}
                        {...register("description", {
                            required: "Description is required",
                        })}
                    />
                    {errors.description && (
                        <p className="text-error text-xs mt-1">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                {/* Price, Duration, Level */}
                <div className="grid grid-cols-3  gap-4">
                    <div className=''>
                        <Input
                            label="Price"
                            type="number"
                            step="0.01"
                            className={`w-full ${errors.price ? "input-error" : ""
                                }`}
                            {...register("price", {
                                required: "Price is required",
                                min: { value: 0, message: "Invalid price" },
                            })}
                        />
                        {errors.price && (
                            <p className="text-error text-xs mt-1">
                                {errors.price.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Input
                            label="Duration"
                            type="text"
                            className={`w-full ${errors.duration ? "input-error" : ""
                                }`}
                            {...register("duration", {
                                required: "Duration is required",
                            })}
                        />
                        {errors.duration && (
                            <p className="text-error text-xs mt-1">
                                {errors.duration.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Select defaultValue="" label="Select Level"
                            className={`${errors.level ? "select-error" : ""
                                }`}
                            {...register("level", {
                                required: "Level is required",
                            })}
                        >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </Select>
                        {errors.level && (
                            <p className="text-error text-xs mt-1">
                                {errors.level.message}
                            </p>
                        )}
                    </div>
                </div>
                {/* Instructor */}
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <Select label="Instructor"
                            className={` w-full text-second ${errors.instructor ? "select-error" : ""
                                }`}
                            {...register("instructor", {
                                required: "Instructor is required",
                            })}
                        >
                            <option value="">Select instructor</option>
                            {instructors.map((inst) => (
                                <option key={inst} value={inst}>
                                    {inst}
                                </option>
                            ))}
                        </Select>
                        {errors.instructor && (
                            <p className="text-error text-xs mt-1">
                                {errors.instructor.message}
                            </p>
                        )}
                    </div>

                    <Input label="Tags"
                        className={`w-full`}
                        {...register("tags")}
                    />
                </div>

                {/* Actions */}
                <div className="modal-action">
                    <Button
                     type="submit"
                        className={`btn btn-primary ${isSubmitting ? "loading" : ""
                            }`}
                    >
                        Create Course
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;