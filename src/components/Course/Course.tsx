import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Button } from '../button/Button'

const Course: React.FC = () => {
    const [hoverDirection, setHoverDirection] = useState<string>('')

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const card = e.currentTarget
        const cardRect = card.getBoundingClientRect()
        const viewportWidth = window.innerWidth

        let threshold
        if (viewportWidth >= 900) {
            threshold = 400
        } else if (viewportWidth >= 768) {
            threshold = 300
        } else if (viewportWidth >= 400) {
            threshold = 200
        } else {
            threshold = 100
        }

        if (viewportWidth - cardRect.right < threshold) {
            setHoverDirection('md:left-[-14rem] left-[-12rem]')
        } else {
            setHoverDirection('left-full')
        }
    }

    return (
        <div
            className="relative group w-full lg:max-w-[97%] lg:mx-auto p-2 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={handleMouseEnter}
        >
            <div className="z-10">
                <div className="lg:max-w-[300px] md:max-w-[300px]">
                    <img
                        className="w-full object-cover"
                        src="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg"
                        alt="Course Image"
                    />
                </div>
                <div className="mt-4">
                    <h2 className="md:text-TMD text-TSM font-bold text-black line-clamp-3">
                        100 Days of Code: The Complete Python Pro Bootcamp
                    </h2>
                    <span className="line-clamp-1 md:text-TSM text-T2XS py-1">
                        Dr. Angela Yu, Developer and Lead Instructor
                    </span>
                    <div className="flex items-center space-x-1 py-1">
                        <span className="md:text-TSM text-T2XS font-semibold">4.7</span>
                        <FaStar className="text-yellow-500" size={15} />
                        <FaStar className="text-yellow-500" size={15} />
                        <FaStar className="text-yellow-500" size={15} />
                        <FaStar className="text-yellow-500" size={15} />
                        <FaStar className="text-yellow-500" size={15} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-red-500 font-bold md:text-TSM text-T2XS">399,000đ</span>
                        <span className="line-through text-gray-500  md:text-TSM text-T2XS">1,399,000đ</span>
                    </div>
                </div>
            </div>
            <div
                className={`absolute top-0 ${hoverDirection} top-[50%] translate-y-[-50%] -left-2 shadow-sm invisible group-hover:visible duration-300 ease-in-out opacity-0 group-hover:opacity-100 bg-white p-4 border border-gray-300 group-hover:z-40 md:w-56 w-48`}
            >
                <h2 className="md:text-TMD text-TSM font-bold text-black line-clamp-3">
                    100 Days of Code: The Complete Python Pro Bootcamp
                </h2>
                <span className="text-T2XS py-1 text-callouts-background-primaryWeak font-semibold">
                    Updated July 2023
                </span>
                <div className="text-T2XS py-1 line-clamp-1">
                    <span>56.5 total</span>
                    {' + '}
                    <span>hoursAll</span>
                    {' + '}
                    <span>LevelsSubtitles</span>
                </div>
                <p className="md:text-TSM text-T2XS text-gray-600 md:line-clamp-4 line-clamp-2 mb-2.5">
                    Master Python by building 100 projects in 100 days. Learn data science, automation, build websites,
                    games and apps!
                </p>
                <Button size="md" variant="primary" className="w-full text-white">
                    Xem chi tiết
                </Button>
            </div>
        </div>
    )
}

export default Course
