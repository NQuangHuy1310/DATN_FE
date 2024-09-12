import React, { useState } from 'react'

import { HiPlusSm, HiMinusSm, HiPlay, HiBookOpen, HiQuestionMarkCircle } from 'react-icons/hi'

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
                                <div className="text-interactive-primary-default *:size-5">
                                    {lesson.type === 'docs' && <HiBookOpen />}
                                    {lesson.type === 'quiz' && <HiQuestionMarkCircle />}
                                    {lesson.type === 'video' && <HiPlay />}
                                </div>
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
