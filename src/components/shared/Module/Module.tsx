import React, { useState } from 'react'

import { HiPlusSm, HiMinusSm } from 'react-icons/hi'

import { IModule } from '~/types/IModule'

interface ModuleProp extends IModule {
    onToggle: boolean
}

const Module: React.FC<ModuleProp> = ({ title, lessons, onToggle }) => {
    const [isActive, setIsActive] = useState(onToggle)

    const toggleModule = () => {
        setIsActive(!isActive)
    }

    return (
        <div>
            <div
                onClick={toggleModule}
                className="bg-neutral-stroke-primaryWeak my-2 flex justify-between px-5 py-3 cursor-pointer"
            >
                <div className="flex items-center gap-2">
                    {isActive ? <HiMinusSm className="size-5" /> : <HiPlusSm className="size-5" />}
                    <h4 className="text-TMD font-semibold">{title}</h4>
                </div>
                <span>{lessons.length} bài học</span>
            </div>
            <div className={`${isActive ? '' : 'hidden'}`}>
                {lessons.map((lesson, index) => (
                    <div key={index} className="px-5 py-3 border-b my-1">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="circle-play"
                                    className="size-4 text-interactive-primary-default"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                                    ></path>
                                </svg>
                                <h4 className="lg:text-TMD text-TSM">{lesson.title}</h4>
                            </div>
                            <span>{lesson.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Module
