import React, { useState } from 'react'

import { Button } from '../../components/button/Button'
import Category from '../../components/Category'
import Course from '../../components/Course/Course'

import { HiArrowNarrowRight } from 'react-icons/hi'
import SliderComponent from '../../components/Slider/Slider'

const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('1')
    const handleTabClick = (tabValue: string) => {
        setActiveTab(tabValue)
    }

    return (
        <div className="max-w-5xl mx-auto px-3">
            <div className="grid grid-cols-12 gap-5 items-center py-3">
                <div className="md:col-span-7 col-span-12 order-2 md:order-1 text-center md:text-left">
                    <h1 className="lg:text-DLG md:text-DMD font-bold text-DSM">
                        Đạt được mục tiêu nghề nghiệp mới với Udemy
                    </h1>
                    <p className="py-3 lg:text-TLG md:text-TMD">
                        Mở khóa quyền truy cập không giới hạn vào hơn 7.000 chương trình học tập từ Google, Microsoft,
                        v.v. với mức giảm giá 30%, thanh toán hàng năm.
                    </p>
                    <div className="grid grid-cols-12 gap-2">
                        <Button className="relative lg:col-span-5 md:col-span-6 col-span-12 lg:text-TLG md:text-TMD pe-10 text-white md:w-auto w-full">
                            Tham gia miễn phí
                            <HiArrowNarrowRight className="absolute right-2 top-[52%] translate-y-[-50%]" size={18} />
                        </Button>
                        <Button
                            variant="secondary"
                            className="relative pe-10 lg:col-span-4 md:col-span-6 col-span-12 text-callouts-background-primaryWeak md:w-auto w-full"
                        >
                            Giảm giá 30%{' '}
                            <HiArrowNarrowRight className="absolute right-2 top-[52%] translate-y-[-50%]" size={18} />
                        </Button>
                    </div>
                </div>

                <div className="md:col-span-5 col-span-12 order-1 md:order-2">
                    <div className="md:max-w-[500px] max-w-[400px] mx-auto">
                        <img
                            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/W5w2jLUv3bEToeITHIEoy/effcf6204a7e9d7321891b186b14a003/BC-3401_LOHP_Q3_GLOBAL_720x500_01_2x.png?auto=format%2Ccompress&dpr=1&w=660&q=40"
                            alt=""
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-TXL font-bold">Tuyển tập những khóa học rộng lớn</h2>
                <p className="text-TMD max-w-[600px] pt-2">
                    Chọn từ hơn 250.000 khóa học video trực tuyến với những bổ sung mới được xuất bản hàng tháng
                </p>
            </div>
            <div className="mt-10">
                <div className="border-b border-gray-300">
                    <ul className="flex space-x-4 *:md:text-TLG text-TMD overflow-x-auto whitespace-nowrap">
                        <li
                            className={`cursor-pointer py-2 px-4 ${
                                activeTab === '1' ? 'font-semibold text-callouts-background-primary' : ''
                            }`}
                            onClick={() => handleTabClick('1')}
                        >
                            Html Css
                        </li>
                        <li
                            className={`cursor-pointer py-2 px-4 ${
                                activeTab === '2' ? 'font-semibold text-callouts-background-primary' : ''
                            }`}
                            onClick={() => handleTabClick('2')}
                        >
                            Javascript
                        </li>
                        <li
                            className={`cursor-pointer py-2 px-4 ${
                                activeTab === '3' ? 'font-semibold text-callouts-background-primary' : ''
                            }`}
                            onClick={() => handleTabClick('3')}
                        >
                            PHP
                        </li>
                        <li
                            className={`cursor-pointer py-2 px-4 ${
                                activeTab === '4' ? 'font-semibold text-callouts-background-primary' : ''
                            }`}
                            onClick={() => handleTabClick('4')}
                        >
                            ReactJs
                        </li>
                    </ul>
                </div>
                <div className="border shadow-sm p-6">
                    {activeTab === '1' && (
                        <div>
                            <div className="mb-4">
                                <h3 className="md:text-TLG text-TMD font-semibold pb-4">
                                    Mở rộng cơ hội nghề nghiệp của bạn với Html Css
                                </h3>
                                <Button variant="secondary">Khám phá Html Css</Button>
                            </div>
                            <SliderComponent slideShow={4}>
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                            </SliderComponent>
                        </div>
                    )}
                    {activeTab === '2' && (
                        <div className="">
                            <div className="mb-4">
                                <h3 className="text-TLG font-semibold pb-4">
                                    Mở rộng cơ hội nghề nghiệp của bạn với Javascript
                                </h3>
                                <Button variant="secondary">Khám phá Javascript</Button>
                            </div>
                            <SliderComponent slideShow={4}>
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                            </SliderComponent>
                        </div>
                    )}
                    {activeTab === '3' && (
                        <div className="">
                            <div className="mb-4">
                                <h3 className="text-TLG font-semibold pb-4">
                                    Mở rộng cơ hội nghề nghiệp của bạn với PHP
                                </h3>
                                <Button variant="secondary">Khám phá PHP</Button>
                            </div>
                            <SliderComponent slideShow={4}>
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                            </SliderComponent>
                        </div>
                    )}
                    {activeTab === '4' && (
                        <div className="">
                            <div className="mb-4">
                                <h3 className="text-TLG font-semibold pb-4">
                                    Mở rộng cơ hội nghề nghiệp của bạn với ReactJs
                                </h3>
                                <Button variant="secondary">Khám phá ReactJs</Button>
                            </div>
                            <SliderComponent slideShow={4}>
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                                <Course />
                            </SliderComponent>
                        </div>
                    )}
                </div>
            </div>
            <div className="pt-4 pb-2 mt-20">
                <h2 className="text-TXL font-bold">Học viên đang xem</h2>
                <div className="mt-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-TXL font-bold py-3">Danh mục nổi bật</h2>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                    <Category
                        image={'https://tse2.mm.bing.net/th?id=OIP.OTcztWPAMRAsv7R-W_-bDQHaHa&pid=Api&P=0&h=180'}
                        title={'Database'}
                        slug={'database'}
                    />
                    <Category
                        image={'https://tse3.mm.bing.net/th?id=OIP.SQFDEQVlK_snXeZihKOQIAHaHS&pid=Api&P=0&h=180'}
                        title={'UI/UX Design'}
                        slug={'ui/ux-design'}
                    />
                    <Category
                        image={'https://tse1.mm.bing.net/th?id=OIP.qc1vaDDiMepmWY5haxJ94gAAAA&pid=Api&P=0&h=180'}
                        title={'Version Control'}
                        slug={'version-control'}
                    />
                    <Category
                        image={'https://tse2.mm.bing.net/th?id=OIP.9RH4j9q6oFE9FiqJUvIFDQHaHa&pid=Api&P=0&h=180'}
                        title={'API Development'}
                        slug={'api-development'}
                    />
                    <Category
                        image={'https://tse3.mm.bing.net/th?id=OIP.eRXge_H69AP-SIbrydEWsgHaHa&pid=Api&P=0&h=180'}
                        title={'Backend Development'}
                        slug={'backend-development'}
                    />
                    <Category
                        image={'https://tse2.mm.bing.net/th?id=OIP.uS7vmC44v67TbjxdpGlAFAHaHa&pid=Api&P=0&h=180'}
                        title={'Frontend Frameworks'}
                        slug={'frontend-frameworks'}
                    />
                </div>
            </div>
            <div className="mt-20 relative">
                <div className="max-w-14 mx-auto z-20 absolute left-[50%] -top-6 translate-x-[-50%]">
                    <img src="https://topica.edu.vn/static/images/icon_fire.png" alt="Icon" className="w-full z-20" />
                </div>
                <div className="bg-interactive-primary-default/5 clip-path h-14"></div>
                <div className="bg-interactive-primary-default/5">
                    <div className="grid md:grid-cols-2 grid-cols-1 px-10 gap-5 pt-5 -mt-[0.02px]">
                        <h4 className="text-TLG font-semibold">
                            Bạn đồng hành vững tin trên con đường chinh phục tri thức.
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nemo libero, nam eum
                            suscipit optio tempora reiciendis provident soluta velit, eos autem repellat minus
                            distinctio nesciunt est veritatis sit nisi!
                        </p>
                    </div>
                    <div className="py-5">
                        <h4 className="text-TLG font-semibold max-w-lg mt-5 px-10">
                            Udemy tự hào mang đến phương pháp học tập tân tiến và chuẩn quốc tế đến cho học viên
                        </h4>
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 px-10 mt-10">
                            <div className="border shadow text-center py-3 bg-white rounded-lg">
                                <div className="max-w-14 mx-auto">
                                    <img
                                        src="https://topica.edu.vn/static/images/icon_teach.png"
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <span className="text-TXL text-interactive-primary-hover font-bold">1,000+</span>
                                <p className="text-TMD">Giảng viên chất lượng, chuyên môn</p>
                            </div>
                            <div className="border shadow text-center py-3 bg-interactive-primary-default/10 rounded-lg">
                                <div className="max-w-14 mx-auto">
                                    <img
                                        src="https://topica.edu.vn/static/images/ht-idea.png"
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <span className="text-TXL text-interactive-primary-hover font-bold">1,000,000+</span>
                                <p className="text-TMD">Học viên theo học mỗi ngày</p>
                            </div>
                            <div className="border shadow text-center py-3 bg-white rounded-lg">
                                <div className="max-w-14 mx-auto">
                                    <img
                                        src="https://topica.edu.vn/static/images/icon_creative.png"
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <span className="text-TXL text-interactive-primary-hover font-bold">6,800+</span>
                                <p className="text-TMD">Khoá học đa dạng phong phú</p>
                            </div>
                            <div className="border shadow text-center py-3 rounded-lg bg-interactive-primary-default/10">
                                <div className="max-w-14 mx-auto">
                                    <img
                                        src="https://topica.edu.vn/static/images/icon_quality.png"
                                        className="w-full"
                                        alt=""
                                    />
                                </div>
                                <span className="text-TXL text-interactive-primary-hover font-bold">17+</span>
                                <p className="text-TMD">Năm kinh nghiệm và chuyên môn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center max-w-4xl text-center md:text-left mx-auto py-5 mt-20">
                <div className="max-w-[350px] mx-auto">
                    <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="" />
                </div>
                <div className="">
                    <h2 className="text-DXS font-bold">Trở thành giảng viên</h2>
                    <p className="my-2 md:text-TMD text-TSM line-clamp-2">
                        Các giảng viên từ khắp nơi trên thế giới dạy hàng triệu người học trên Udemy. Chúng tôi cung cấp
                        các công cụ và kỹ năng để dạy những gì bạn yêu thích.
                    </p>
                    <Button className="md:mx-0 mx-auto">Bắt đầu ngay</Button>
                </div>
            </div>
        </div>
    )
}

export default Home
