import { FaSearch, FaStar } from "react-icons/fa"
import { Button } from "~/components/ui/button/Button"

import Input from "~/components/ui/input/Input"


const WishList = () => {
    return (
        <div className="pb-10">
            <div className="bg-interactive-primary-default py-10 text-white">
                <div className=" max-w-screen-lg  mx-auto px-3">
                    <div className="">
                        <h1 className="text-DSM font-bold my-2">Khóa học yêu thích</h1>
                        <span>Hãy mua ngay khóa học để khám phá</span>
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
                <div className="grid grid-cols-1 mb-10 gap-3 md:gap-x-3 md:gap-y-8">
                    <div className="z-10 flex flex-col md:flex-row gap-5 md:gap-10 shadow p-3 md:p-5 rounded">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-x-10">
                            <div className="w-full md:max-w-[300px]">
                                <img
                                    className="w-full object-cover"
                                    src="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg"
                                    alt="Course Image"
                                />
                            </div>
                            <div className="">
                                <h2 className="text-TXS md:text-TMD font-bold text-black line-clamp-3">
                                    100 Days of Code: The Complete Python Pro Bootcamp
                                </h2>
                                <span className="line-clamp-1 text-T2XS md:text-TSM py-1">
                                    Dr. Angela Yu, Developer and Lead Instructor
                                </span>
                                <div className="flex items-center space-x-1 py-1">
                                    <span className="text-T2XS md:text-TSM font-semibold">4.7</span>
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-red-500 font-bold text-T2XS md:text-TSM">399,000đ</span>
                                    <span className="line-through text-gray-500 text-T2XS md:text-TSM">1,399,000đ</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 h-8 w-full md:h-11 md:w-48 md:text-TSM">
                            <Button className="w-1/2 md:w-auto">Mua ngay</Button>
                            <Button className="w-1/2 md:w-auto">Xóa</Button>
                        </div>
                    </div>
                    <div className="z-10 flex flex-col md:flex-row gap-5 md:gap-10 shadow p-3 md:p-5 rounded">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-x-10">
                            <div className="w-full md:max-w-[300px]">
                                <img
                                    className="w-full object-cover"
                                    src="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg"
                                    alt="Course Image"
                                />
                            </div>
                            <div className="">
                                <h2 className="text-TXS md:text-TMD font-bold text-black line-clamp-3">
                                    100 Days of Code: The Complete Python Pro Bootcamp
                                </h2>
                                <span className="line-clamp-1 text-T2XS md:text-TSM py-1">
                                    Dr. Angela Yu, Developer and Lead Instructor
                                </span>
                                <div className="flex items-center space-x-1 py-1">
                                    <span className="text-T2XS md:text-TSM font-semibold">4.7</span>
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                    <FaStar className="text-yellow-500" size={15} />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-red-500 font-bold text-T2XS md:text-TSM">399,000đ</span>
                                    <span className="line-through text-gray-500 text-T2XS md:text-TSM">1,399,000đ</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 h-8 w-full md:h-11 md:w-48 md:text-TSM">
                            <Button className="w-1/2 md:w-auto">Mua ngay</Button>
                            <Button className="w-1/2 md:w-auto">Xóa</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default WishList
