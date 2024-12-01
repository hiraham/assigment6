import Image from 'next/image'
//import Link from 'next/link'
import React from 'react'

const courseData = [
  {
    id: 1,
    title: "Design",
    image: "/C.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    courseName: "UX/UI Design 2010",
    price: "$400",
  },
  {
    id: 2,
    title: "Programming",
    image: "/D.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    courseName: "Introduction to Python",
    price: "$400",
  },
  {
    id: 3,
    title: "Business",
    image: "/G.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    courseName: "Data Analysis for Beginners",
    price: "$400",
  },
  {
    id: 1,
    title: "Design",
    image: "/B.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    courseName: "UX/UI Design 2010",
    price: "$400",
  },
  {
    id: 2,
    title: "Programming",
    image: "/E.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    courseName: "Introduction to Python",
    price: "$400",
  },
  {
    id: 3,
    title: "Business",
    image: "/F.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    courseName: "Data Analysis for Beginners",
    price: "$400",
  },
];

const Courses = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-6xl font-bold text-center">Courses</h2>
        <p className="text-center font-normal py-4">Your Ultimate Guide to Learning</p>
        <div className="mt-6 grid gap-14 lg:grid-cols-3">
          {courseData.map((course) => (
            <div key={course.id} className="group relative bg-primary  p-4 hover:shadow-lg transition">
              <Image
                src={course.image}
                alt={`Course Image for ${course.title}`}
                width={416}
                height={300}
                className=" object-cover group-hover:opacity-75"
              />
              <h3 className="mt-4 text-xl font-bold">{course.title}</h3>
              <h4 className="text-lg text-gray-600 mt-2">{course.courseName}</h4>
              <p className="text-base font-normal mt-2 text-gray-700">{course.description}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="px-4 py-2 bg-grey-700 hover:bg-grey-900 border border-black rounded">
                  Enroll now
                </button>
                <span className="text-lg font-semibold text-gray-800">{course.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
