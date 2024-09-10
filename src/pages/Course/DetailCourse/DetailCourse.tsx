import React, { useState } from 'react'

import { FaStar } from 'react-icons/fa'
import { HiStar, HiGlobeAlt } from 'react-icons/hi'

import Popup from '~/components/shared/Popup'
import Review from '~/components/shared/Review'
import Module from '~/components/shared/Module/Module'
import { Button } from '~/components/ui/button/Button'
import { IModule } from '~/types/IModule'

const courses: IModule[] = [
    {
        title: 'Bài học 1',
        lessons: [
            { title: 'Bài học 1.1', time: 9.25, type: 'video' },
            { title: 'Bài học 1.2', time: 8.25, type: 'docs' },
            { title: 'Bài học 1.3', time: 7.25, type: 'docs' },
            { title: 'Bài học 1.4', time: 6.25, type: 'quiz' }
        ]
    },
    {
        title: 'Bài học 2',
        lessons: [
            { title: 'Bài học 2.1', time: 8.25, type: 'video' },
            { title: 'Bài học 2.2', time: 8.25, type: 'docs' },
            { title: 'Bài học 2.3', time: 9.25, type: 'video' },
            { title: 'Bài học 2.4', time: 15.25, type: 'quiz' }
        ]
    }
]

const DetailCourse: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isPopupOpen1, setIsPopupOpen1] = useState(false)

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen)
    }
    const togglePopup1 = () => {
        setIsPopupOpen1(!isPopupOpen1)
    }
    return (
        <div>
            <div className="max-w-screen-xl mx-auto md:px-10 px-2 grid grid-cols-12 gap-5 py-8">
                <div className="lg:col-span-9 md:col-span-8 col-span-12 order-2 md:order-1">
                    {/* Tiêu đề bài học */}
                    <div className="max-w-[800px]">
                        <h2 className="text-DXS lg:text-DSM font-bold">
                            Xây dựng các trang web trong thế giới thực đáp ứng với HTML và CSS
                        </h2>
                        <p className="text-TMD lg:text-TLG py-2 max-w-[800px]">
                            Tìm hiểu HTML5, CSS3 và thiết kế web hiện đại bằng cách xây dựng một trang web tuyệt đẹp cho
                            danh mục đầu tư của bạn! Bao gồm flexbox và CSS Grid
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-400 font-bold">4.7</span>
                                <div className="flex text-orange-400 gap-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <span className="text-TMD font-semibold">429,764 học viên</span>
                        </div>
                        <div>
                            <p className="text-TSM py-2">
                                Tạo bởi <span className="underline">Lee Đình Dũng</span>
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className=" text-TSM">Cập nhật lần cuối: 11/2023</span>
                            <div className="flex items-center gap-1 text-TMD ">
                                <HiGlobeAlt className="size-4" /> <span>Tiếng Việt</span>
                            </div>
                        </div>
                    </div>

                    {/* Các tab liên quan */}
                    <div className="mt-10">
                        <h3 className="text-TXL font-bold">Khám phá các chủ đề liên quan</h3>
                        <div className="flex items-center flex-wrap gap-4 mt-3">
                            <Button size="default" variant="secondary" className="rounded-full !px-5">
                                Html
                            </Button>
                            <Button size="default" variant="secondary" className="rounded-full !px-5">
                                Css
                            </Button>
                            <Button size="default" variant="secondary" className="rounded-full !px-5">
                                JavaScript
                            </Button>
                            <Button size="default" variant="secondary" className="rounded-full !px-5">
                                PHP/Laravel
                            </Button>
                            <Button size="default" variant="secondary" className="rounded-full !px-5">
                                ReactJs
                            </Button>
                            <Button size="default" variant="secondary" className="rounded-full !px-5">
                                NodeJs
                            </Button>
                        </div>
                    </div>

                    {/* Nội dung khóa học */}
                    <div className="mt-10">
                        <h3 className="text-TXL font-bold">Nội dung khóa học</h3>
                        <div className="flex gap-10 mt-2 md:text-TMD text-T2XS">
                            <p>
                                <span className="font-semibold">4</span> chương
                            </p>
                            <p className="list-item">
                                <span className="font-semibold">12</span> bài học
                            </p>
                            <p className="list-item">
                                Thời lượng <span className="font-semibold">03 giờ 26 phút</span>
                            </p>
                        </div>
                    </div>

                    {/* Danh sách bài học */}
                    <div className="md:max-w-[90%] w-full">
                        {courses.map((course, index) => (
                            <Module lessons={course.lessons} title={course.title} key={index} onToggle={index === 0} />
                        ))}
                    </div>

                    {/* Tác giả */}
                    <div className="mt-10 md:max-w-[90%] w-full">
                        <h4 className="text-TXL font-bold">Tác giả</h4>
                        <span className="block my-2 text-interactive-primary-default font-medium">Lee Đình Dũng</span>
                        <p className="text-TMD">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere nemo esse
                            reprehenderit eaque eius iure perferendis quia sunt culpa, officia dolorum sequi ullam
                            aspernatur necessitatibus minus, eveniet voluptatum ad.
                        </p>
                    </div>

                    {/* Đánh giá khóa học */}
                    <div className="mt-10 md:max-w-[90%] w-full">
                        <h3 className="text-TXL font-bold flex items-center gap-2">
                            <span className="flex items-center gap-1">
                                <HiStar className="text-orange-500" /> 4.7
                            </span>
                            Xếp hạng khóa học
                        </h3>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            <Review
                                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                                rating={4}
                                imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                                time={2}
                                usename="Lee Đình Dũng"
                            />
                            <Review
                                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                                rating={4}
                                imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                                time={2}
                                usename="Lee Đình Dũng"
                            />
                            <Review
                                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                                rating={4}
                                imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                                time={2}
                                usename="Lee Đình Dũng"
                            />
                            <Review
                                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                                rating={4}
                                imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                                time={2}
                                usename="Lee Đình Dũng"
                            />
                        </div>
                        <div className="mt-10">
                            <Button variant="secondary" onClick={togglePopup}>
                                Hiển thị tất cả
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Bài học */}
                <div className="lg:col-span-3 md:col-span-4 col-span-12 md:sticky md:top-[90px] md:self-start z-40 order-1 md:order-2">
                    <div className="bg-white shadow-md rounded-lg p-2">
                        <div className="relative">
                            <div className="max-w-70 ">
                                <img
                                    src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                                    className="w-full rounded-lg"
                                    alt=""
                                />
                            </div>
                            <div
                                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer text-center"
                                onClick={togglePopup1}
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="circle-play"
                                    className="size-10 text-white mx-auto"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="py-2 text-center flex gap-5 justify-center">
                            <del className="text-TLG">1,999,000đ</del>{' '}
                            <span className="text-TLG font-bold text-feedback-error-default">999,000đ</span>
                        </div>
                        <Button className="mx-auto w-full md:w-auto">Đăng kí ngay</Button>
                        <div className="px-3 py-3">
                            <div className="flex items-center gap-2">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="gauge-high"
                                    className="size-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                                    ></path>
                                </svg>
                                <span className="text-TMD">Trình độ cơ bản</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="film"
                                    className="size-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM400 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H400z"
                                    ></path>
                                </svg>
                                <span className="text-TMD">13 giờ video</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="download"
                                    className="size-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M480 160c0 17.7-14.3 32-32 32H352v64c0 12.9-7.7 24.6-19.6 29.5s-25.4 2.2-34.5-6.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.5-6.9S352 115.1 352 128v64h96c17.7 0 32 14.3 32 32zM352 416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V304c0-17.7 14.3-32 32-32h96v64c0 12.9 7.7 24.6 19.6 29.5s25.4 2.2 34.5-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.5-6.9S160 243.1 160 256v64H64v112c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16V304c0-17.7 14.3-32 32-32h96v64H352v80z"
                                    ></path>
                                </svg>
                                <span className="text-TMD">Truy cập trọn đời</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup hiển thị đánh giá */}
            <Popup isOpen={isPopupOpen} onClose={togglePopup} title="Xếp hạng khóa học">
                <div className="grid grid-cols-12 w-full">
                    <div className="md:col-span-3 col-span-12">
                        <div className="flex items-center gap-2">
                            <div className="md:w-[100px] w-[300px] h-[5px] bg-interactive-background-primaryHoverWeak">
                                <div className="w-[57%] h-full bg-black"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex *:size-3">
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                </div>
                                <span className="text-TMD text-interactive-primary-default underline">57%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="md:w-[100px] w-[300px] h-[5px] bg-interactive-background-primaryHoverWeak">
                                <div className="w-[34%] h-full bg-black"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex *:size-3">
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar />
                                </div>
                                <span className="text-TMD text-interactive-primary-default underline">34%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="md:w-[100px] w-[300px] h-[5px] bg-interactive-background-primaryHoverWeak">
                                <div className="w-[7%] h-full bg-black"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex *:size-3">
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar />
                                    <HiStar />
                                </div>
                                <span className="text-TMD text-interactive-primary-default underline">7%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="md:w-[100px] w-[300px] h-[5px] bg-interactive-background-primaryHoverWeak">
                                <div className="w-[1%] h-full bg-black"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex *:size-3">
                                    <HiStar className="text-orange-500" />
                                    <HiStar className="text-orange-500" />
                                    <HiStar />
                                    <HiStar />
                                    <HiStar />
                                </div>
                                <span className="text-TMD text-interactive-primary-default underline">1%</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="md:w-[100px] w-[300px] h-[5px] bg-interactive-background-primaryHoverWeak">
                                <div className="w-[1%] h-full bg-black"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex *:size-3">
                                    <HiStar className="text-orange-500" />
                                    <HiStar />
                                    <HiStar />
                                    <HiStar />
                                    <HiStar />
                                </div>
                                <span className="text-TMD text-interactive-primary-default underline">1%</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-9 w-full col-span-12 ps-5">
                        <Review
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                            rating={4}
                            imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                            time={2}
                            usename="Lee Đình Dũng"
                        />
                        <Review
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                            rating={4}
                            imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                            time={2}
                            usename="Lee Đình Dũng"
                        />
                        <Review
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                            rating={4}
                            imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                            time={2}
                            usename="Lee Đình Dũng"
                        />
                        <Review
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                            rating={4}
                            imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                            time={2}
                            usename="Lee Đình Dũng"
                        />
                        <Review
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                            rating={4}
                            imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                            time={2}
                            usename="Lee Đình Dũng"
                        />
                        <Review
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe eligendi architecto quaerat suscipit, exercitationem ipsum doloremque porro molestiae maxime laboriosam nam harum dignissimos nemo inventore est quibusdam tempore ipsa."
                            rating={4}
                            imageUrl="https://img-b.udemycdn.com/user/50x50/212256586_442a.jpg"
                            time={2}
                            usename="Lee Đình Dũng"
                        />
                    </div>
                </div>
            </Popup>
            {/* Popup hiển thị video */}
            <Popup
                isOpen={isPopupOpen1}
                onClose={togglePopup1}
                title="Xây dựng các trang web trong thế giới thực đáp ứng với HTML và CSS"
            >
                <div>
                    <iframe
                        className="w-full min-h-[60vh]"
                        src="https://www.youtube.com/embed/R6plN3FvzFY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Popup>
        </div>
    )
}

export default DetailCourse
