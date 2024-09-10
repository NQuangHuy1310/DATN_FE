import { useState } from "react"
import { FaSearch } from "react-icons/fa"

import Input from "~/components/ui/input/Input"
import Course from "~/components/shared/Course/Course"

const MyCourse = () => {
    const [activeTab, setActiveTab] = useState<string>('1')
    const handleTabClick = (tabValue: string) => {
        setActiveTab(tabValue)
    }
    return (
        <div>
            <div className=" py-1 md:py-3">
                <div className=" px-3">
                    <div className="">
                        <h1 className="text-DSM font-bold my-5">Khóa học của tôi</h1>
                        <div className="border-b border-gray-300 overflow-x-auto">
                            <ul className="flex space-x-4 *:md:text-TLG text-TMD  whitespace-nowrap">
                                <li className={`cursor-pointer py-2 px-4 ${activeTab === '1' ? 'font-semibold text-callouts-background-primary' : ''}`} onClick={() => handleTabClick('1')}>Tất cả khóa học</li>

                                <li className={`cursor-pointer py-2 px-4 ${activeTab === '2' ? 'font-semibold text-callouts-background-primary' : ''}`} onClick={() => handleTabClick('2')}>Chứng chỉ</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" px-3">
                {activeTab === '1' && (
                    <div>
                        <div className="my-2 md:my-5 ">

                            <div className="md:flex  justify-between gap-3 md:mt-3">
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-6">
                                        <label htmlFor="" className=" opacity-0 md:opacity-100">Sắp xếp theo</label>
                                        <select name="" id="" className="border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md h-[40px]  text-black font-normal focus:border-interactive-stroke-primaryFocus w-full mt-2 *:text-[10px] *:md:text-TMD">
                                            <option value="">Từ A đến Z</option>
                                            <option value="">Từ Z đến A</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="" className="opacity-0 md:opacity-100">Lọc theo</label>
                                        <select name="" id="" className="border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md h-[40px] text-black font-normal focus:border-interactive-stroke-primaryFocus w-full mt-2 *:text-[10px] *:md:text-TMD" >
                                            <option value="">Thể loại</option>
                                            <option value="">Danh mục</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-[32px] ">
                                    <form action="" className="relative">
                                        <Input type="text" name="" className="w-full" placeholder="Tìm kiếm khóa học" />
                                        <div className="absolute top-0 right-2 h-full flex items-center">
                                            <FaSearch className="text-slate-400" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 mb-10  gap-x-3 gap-y-8">
                            <Course />
                            <Course />
                            <Course />
                            <Course />
                            <Course />
                        </div>
                    </div>
                )}

                {activeTab === '2' && (
                    <div>
                        <h3 className="font-medium text-TLG my-3">Huy hiệu của tôi</h3>
                        <span className="text-TMD">Bạn đã kiếm được và tải lên 0 huy hiệu</span>
                        <p className="mt-5">Hiện tại không có huy hiệu nào được tải lên hồ sơ của bạn. Bắt đầu hành trình hướng tới mục tiêu chứng nhận</p>
                    </div>
                )}
            </div>
        </div >
    )
}

export default MyCourse


