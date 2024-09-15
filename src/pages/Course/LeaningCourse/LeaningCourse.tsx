import React, { useEffect, useRef, useState } from 'react'

import { FaLock } from 'react-icons/fa'
import {
    HiMenu,
    HiPlay,
    HiPlusSm,
    HiMinusSm,
    HiBookOpen,
    HiDocument,
    HiChevronLeft,
    HiArrowSmRight,
    HiChevronRight,
    HiOutlineXCircle,
    HiOutlineChatAlt2,
    HiQuestionMarkCircle
} from 'react-icons/hi'

import { Button } from '~/components/ui/button/Button'
import { IModule } from '~/types/IModule'
import SlideOutPanel from '~/components/shared/SlideOutPanel'

const LearningCourse: React.FC = () => {
    const [toggleTab, setToggleTab] = useState<boolean>(true)
    const [toggleComment, setToggleComment] = useState<boolean>(false)
    const [toggleNode, setToggleNode] = useState<boolean>(false)
    const [toggleNodeList, setToggleNodeList] = useState<boolean>(false)
    const courseListRef = useRef<HTMLDivElement | null>(null)
    const [activeModules, setActiveModules] = useState<number[]>([])

    const activeToggleTab = () => setToggleTab(!toggleTab)
    const activeToggleComment = () => setToggleComment(!toggleComment)
    const activeToggleNode = () => setToggleNode(!toggleNode)
    const activeToggleNodeList = () => setToggleNodeList(!toggleNodeList)

    const handleClickOutside = (e: MouseEvent) => {
        if (courseListRef.current && !courseListRef.current.contains(e.target as Node)) {
            if (window.innerWidth < 1024) setToggleTab(false)
        }
    }
    const handleToggleModule = (index: number) => {
        setActiveModules((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    useEffect(() => {
        if (toggleTab) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [toggleTab])

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
                { title: 'Bài học 2.4', time: 15.25, type: 'quiz' },
                { title: 'Bài học 2.5', time: 15.25, type: 'quiz' }
            ]
        },
        {
            title: 'Bài học 3',
            lessons: [
                { title: 'Bài học 3.1', time: 8.25, type: 'video' },
                { title: 'Bài học 3.2', time: 8.25, type: 'docs' },
                { title: 'Bài học 3.3', time: 9.25, type: 'video' },
                { title: 'Bài học 3.4', time: 15.25, type: 'quiz' }
            ]
        }
    ]

    return (
        <div>
            {/* Header Leaning */}
            <header className="bg-neutral-primary-default text-white flex justify-between items-center px-4 h-14 py-2 fixed w-full z-50">
                <div className="flex items-center gap-4">
                    <HiChevronLeft className="size-8 text-white" />
                    <div className="md:block hidden">
                        <img
                            src="https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/logo.png?1707187039390"
                            alt=""
                        />
                    </div>
                    <div>
                        <h2 className="lg:text-TLG md:text-TMD text-TSM font-semibold">Kiến thức nhập môn IT</h2>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <span className="block border rounded-full md:p-1.5 p-1 md:text-TSM text-T2XS">0%</span>
                        <span className="text-TMD lg:block hidden">0/12 bài học</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => setToggleNodeList(true)}>
                        <HiDocument className="size-5" />
                        <span className="text-TMD lg:block hidden">Ghi chú</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <HiQuestionMarkCircle className="size-5" />
                        <span className="text-TMD lg:block hidden">Hướng dẫn</span>
                    </div>
                </div>
            </header>

            <main className="min-h-screen pt-[58px] flex">
                <section
                    className={`${toggleTab ? 'lg:w-[77%] w-full' : 'w-full'} relative overflow-y-auto max-h-[85vh]`}
                >
                    <div className="">
                        <div className="bg-black">
                            <iframe
                                src="https://www.youtube.com/embed/R6plN3FvzFY"
                                className="w-full md:min-h-[520px] min-h-[300px] max-w-5xl mx-auto bg-black"
                            ></iframe>
                        </div>

                        {/* Chỉ hiển thị khi bài học là bài kiểm tra */}
                        {/* <div>
                            <CodeEditor />
                        </div> */}
                    </div>

                    {/* Chỉ hiển thị khi bài học là video */}
                    <div className="max-w-5xl mx-auto overflow-hidden px-10">
                        <div className="flex justify-between mt-10 flex-wrap gap-4">
                            <div>
                                <h2 className="md:text-DMD text-DXS font-semibold">Mô hình Client - Server là gì?</h2>
                                <span className="md:text-TMD text-TSM">Cập nhật tháng 11 năm 2022</span>
                            </div>
                            <div>
                                <Button
                                    className="flex !ps-10 relative shadow-md"
                                    variant="primary"
                                    onClick={activeToggleNode}
                                >
                                    <HiPlusSm className="size-5 w-fit absolute top-1/2 -translate-y-1/2 left-3" />
                                    <span className="md:text-TMD text-TSM">Thêm ghi chú tại 00.00</span>
                                </Button>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt distinctio magnam
                            accusantium voluptatum, minima soluta quaerat alias id sapiente accusamus a doloribus
                            quisquam praesentium nesciunt dolore, sequi nulla ut illo! Ut libero inventore nihil impedit
                            officia. Ex officia aperiam atque aliquid eveniet deleniti iusto eum, quidem voluptates
                            labore quas perspiciatis quam alias? Nobis adipisci quas id sequi culpa consectetur quae?
                            Natus explicabo repellat amet ab magnam magni voluptatibus dolorum, cumque pariatur,
                            perferendis adipisci itaque! Exercitationem et excepturi sapiente similique fuga, voluptate
                            veniam, animi voluptas voluptatum ratione corporis magnam tempora ea! Non similique sunt id
                            nihil dicta, tenetur voluptatem laboriosam nulla fugit sapiente modi quisquam laudantium
                            corrupti inventore aliquam deleniti tempora dolores est commodi. Atque autem at dicta
                            dignissimos molestiae perferendis! Praesentium dolore, dicta placeat facilis nam deserunt
                            rem pariatur temporibus magnam eum, modi totam, eveniet labore! Assumenda, quasi natus quae
                            deserunt cumque distinctio quas, reiciendis earum, exercitationem rerum iste voluptatum?
                        </div>

                        <div
                            className={`fixed bottom-0 left-0 ${
                                toggleTab ? 'lg:w-[77%] w-full' : 'w-full'
                            } bg-white z-[999] py-3 border transition-all duration-500 ease-in-out overflow-y-auto ${
                                toggleNode ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                            }`}
                        >
                            <div className="overflow-y-auto max-h-screen px-12 max-w-5xl mx-auto">
                                <div className="flex gap-2 items-center py-2">
                                    <h3 className="text-TXL font-semibold">Thêm ghi chú tại</h3>
                                    <Button className="h-7">00.00</Button>
                                </div>
                                <div className="py-2">
                                    <textarea
                                        name=""
                                        id=""
                                        className="block p-2.5 min-h-25 w-full text-sm overflow-hidden text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                                            const target = e.target as HTMLTextAreaElement
                                            target.style.height = 'auto'
                                            target.style.height = `${target.scrollHeight}px`
                                        }}
                                    ></textarea>
                                    <div className="flex mt-5 gap-2 justify-end">
                                        <Button className="uppercase" variant="secondary" onClick={activeToggleNode}>
                                            Hủy bỏ
                                        </Button>
                                        <Button className="uppercase" variant="primary">
                                            Tạo ghi chú
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`fixed bottom-[70px] z-50 ${toggleTab ? 'lg:right-[25%] right-[2%]' : 'right-[2%]'}`}
                    >
                        <Button
                            className="flex md:!ps-10 md:relative shadow-md h-8"
                            variant="secondary"
                            onClick={activeToggleComment}
                        >
                            <HiOutlineChatAlt2 className="size-7 text-interactive-primary-default md:absolute md:top-1/2 md:-translate-y-1/2 md:left-2" />
                            <span className="md:block hidden">Hỏi đáp</span>
                        </Button>
                    </div>
                </section>
                {toggleTab && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-[998] block lg:hidden"
                        onClick={() => setToggleTab(false)}
                    />
                )}
                <aside
                    ref={courseListRef}
                    className={`absolute top-0 bg-white h-screen w-full md:w-[50vw] px-2 z-[999] lg:fixed lg:w-[23%] lg:right-0 lg:top-[60px] lg:h-[619px] lg:bottom-0 overflow-y-auto lg:border-l lg:px-1 ${
                        toggleTab ? 'block' : 'hidden'
                    }`}
                >
                    <div className="w-full">
                        <div className="flex items-center justify-between px-2 py-2 sticky top-0 bg-white z-[1000]">
                            <h2 className="text-TLG font-semibold ">Nội dung khóa học</h2>
                            <div className="lg:hidden block cursor-pointer" onClick={activeToggleTab}>
                                <HiOutlineXCircle className="size-5" />
                            </div>
                        </div>
                        {courses.map((course, index) => (
                            <div key={index} className="sticky top-10 my-1">
                                <div
                                    onClick={() => handleToggleModule(index)}
                                    className="bg-neutral-stroke-primaryWeak rounded hover:bg-neutral-stroke-primary duration-200 flex justify-between items-center px-5 py-2 cursor-pointer"
                                >
                                    <div className="items-center gap-2">
                                        <h4 className="text-TMD font-bold">{course.title}</h4>
                                        <div>
                                            <span className="text-TSM">0/{course.lessons.length}</span>
                                            {' | '}
                                            <span className="text-TSM">
                                                {course.lessons.reduce((total, lesson) => total + lesson.time, 0)} phút
                                            </span>
                                        </div>
                                    </div>
                                    {activeModules.includes(index) ? (
                                        <HiMinusSm className="size-5" />
                                    ) : (
                                        <HiPlusSm className="size-5" />
                                    )}
                                </div>
                                {activeModules.includes(index) && (
                                    <div className="sticky top-0 bg-gray-100 z-10">
                                        {course.lessons.map((lesson, lessonIndex) => (
                                            <div key={lessonIndex} className="px-5 py-3 border-b mb-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div>
                                                            <h4 className="lg:text-TMD text-TSM">{lesson.title}</h4>
                                                            <div className="flex items-center gap-1">
                                                                <div className="text-interactive-primary-default size-5 flex items-center">
                                                                    {lesson.type === 'docs' && <HiBookOpen />}
                                                                    {lesson.type === 'quiz' && <HiQuestionMarkCircle />}
                                                                    {lesson.type === 'video' && <HiPlay />}
                                                                </div>
                                                                <span className="text-TSM">{lesson.time} phút</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <FaLock className="size-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>
            </main>

            {/* Footer Leaning */}
            <footer className="bg-neutral-200 fixed bottom-0 w-full py-2">
                <div>
                    <div className="flex gap-2 items-center justify-center">
                        <Button
                            variant="secondary"
                            className="md:text-TMD text-TSM rounded-2xl md:h-8 h-6 md:!pe-5 md:!ps-10 !ps-8 relative text-interactive-primary-default/50"
                        >
                            Bài Trước
                            <HiChevronLeft className="md:size-5 size-4 absolute left-3 top-1/2 -translate-y-1/2" />
                        </Button>
                        <Button
                            variant="primary"
                            className="md:text-TMD text-TSM rounded-2xl md:h-8 h-6 md:!ps-5 md:!pe-10 !pe-8 relative text-white"
                        >
                            Bài Tiếp Theo
                            <HiChevronRight className="md:size-5 size-4 absolute right-3 top-1/2 -translate-y-1/2" />
                        </Button>
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-1 flex items-center gap-2">
                    <h4 className="font-semibold text-TMD lg:block hidden">1.Khái niệm cần biết</h4>
                    <div className="bg-white rounded-full p-1.5 cursor-pointer" onClick={activeToggleTab}>
                        {toggleTab ? (
                            <HiArrowSmRight className="md:size-6 size-4" />
                        ) : (
                            <HiMenu className="md:size-6 size-4" />
                        )}
                    </div>
                </div>
            </footer>

            <SlideOutPanel isVisible={toggleComment} onClose={activeToggleComment} title="Thêm ghi chú">
                <div>
                    <h3>Thêm ghi chú mới</h3>
                    <div className="overflow-y-auto max-h-screen px-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat earum reiciendis harum
                        ratione
                    </div>
                </div>
            </SlideOutPanel>

            <SlideOutPanel isVisible={toggleNodeList} onClose={activeToggleNodeList} title="Danh sách ghi chú">
                {/* Nội dung cho danh sách ghi chú */}
                <div>
                    <h3>Danh sách ghi chú</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores, quam vitae numquam
                    inventore facilis laborum dolores quod consectetur dolorem. Porro quam veniam itaque deserunt velit
                    excepturi distinctio sapiente qui? Eum laboriosam nulla fugiat nemo possimus eos, fugit maxime! Eos
                    aliquid quidem sunt harum veritatis, odio, nam magni nostrum quaerat ipsam exercitationem nulla
                    minus officia optio tempore ducimus? Numquam, doloremque! Vero facilis, pariatur, ratione
                    voluptatibus velit eligendi in earum delectus exercitationem minus commodi aperiam molestias. Neque,
                    omnis quasi ab quis illo dolore voluptatum libero quam accusamus possimus, nostrum enim.
                    Consequatur. Expedita quas omnis odit. Quam explicabo autem incidunt possimus nihil quod impedit.
                    Molestiae explicabo itaque, quidem voluptas aperiam tempore laboriosam. Alias deleniti neque velit
                    doloribus facilis cum consequuntur. Eligendi, sed?
                </div>
            </SlideOutPanel>
        </div>
    )
}

export default LearningCourse
