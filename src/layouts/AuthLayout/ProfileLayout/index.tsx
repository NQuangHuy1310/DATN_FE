import { ReactNode } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { LuLock } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import config from '../../../config'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const ProfileLayout = ({ children, title }: { children: ReactNode, title: string }) => {
    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row  max-w-5xl lg:gap-10 md:gap-5 mt-[70px] mx-auto px-3">
                <aside className="flex-shrink-0 mx-auto w-full  md:px-0 lg:max-w-[270px] md:max-w-[200px] lg:mt-[85px] mt-5 ">
                    <ul className="p-3 rounded-xl text-TSM shadow">
                        <Link to={config.routes.profile}>
                            <li className="flex items-center gap-2 bg-[#EBF1FF] p-2 my-2 rounded-md font-medium">
                                <div className="bg-[#EBF1FF] rounded-full p-1">
                                    <FaCircleUser className="text-callouts-background-primary" />
                                </div>
                                Cài đặt tài khoản
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex items-center gap-2 p-2 my-2 rounded-md font-medium">
                                <div className="bg-[#EBF1FF] rounded-full p-1">
                                    <FaRegBell />
                                </div>
                                Thông báo
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex items-center gap-2 p-2 rounded-md font-medium">
                                <div className="bg-[#EBF1FF] rounded-full p-1">
                                    <LuLock />
                                </div>
                                Quyền riêng tư
                            </li>
                        </Link>
                    </ul>
                </aside>
                <main className='md:flex-1 lg:px-10 pb-5'>
                    {children}
                </main>
            </div>
            <Footer />
        </div>

    )
}

export default ProfileLayout
