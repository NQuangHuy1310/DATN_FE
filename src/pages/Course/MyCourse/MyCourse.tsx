import { FaSearch } from "react-icons/fa"

import Input from "~/components/ui/input/Input"
import Course from "~/components/shared/Course/Course"

const MyCourse = () => {
    return (
        <div>
            <div className="bg-interactive-primary-default py-10 text-white">
                <div className=" max-w-screen-lg  mx-auto px-3">
                    <div className="">
                        <h1 className="text-DSM font-bold my-2">Khóa học của tôi</h1>
                        <span>Bạn chưa hoàn thành khóa học nào</span>
                    </div>

                </div>
            </div>

            <div className="max-w-screen-lg mx-auto px-3">
                <div className="my-6 md:my-5 ">
                    <h3 className="text-TXL font-medium">Tất cả khóa học</h3>
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
        </div >
    )
}

export default MyCourse


