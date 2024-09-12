import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { LuLock } from 'react-icons/lu'
import { FaImages } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'

import config from '~/config'
import Header from '~/layouts/components/Header'
import Footer from '~/layouts/components/Footer'

const ProfileLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row  max-w-5xl gap-5 mx-auto mt-28 p-3 md:p-10 2xl:p-0 ">

                <aside className="flex-shrink-0 mx-auto w-full  md:px-0 lg:max-w-[270px] md:max-w-[200px] ">
                    <div className='text-center border rounded-lg rounded-b-none p-2'>
                        <img src="https://picsum.photos/200" alt="" className='rounded-full w-28 mx-auto' />
                        <p className='p-3 text-TXL font-medium'>Lê Đình Dũng</p>
                    </div>
                    <ul className="p-3 rounded-lg rounded-t-none text-TSM border">

                        <NavLink to={config.routes.profile} className={({ isActive }) => isActive ? 'active ' : ''}>
                            <li className="flex items-center gap-2  p-2 my-2 rounded-md font-medium">
                                <div className="bg-[#EBF1FF] rounded-full p-1 " >
                                    <FaCircleUser />
                                </div>
                                Hồ sơ
                            </li>
                        </NavLink>
                        <NavLink to={config.routes.photo} className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className="flex items-center gap-2  p-2 my-2 rounded-md font-medium">
                                <div className="bg-[#EBF1FF] rounded-full p-1">
                                    <FaImages />
                                </div>
                                Ảnh
                            </li>
                        </NavLink>
                        <NavLink to={config.routes.security} className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className="flex items-center gap-2 p-2 rounded-md font-medium">
                                <div className="bg-[#EBF1FF] rounded-full p-1">
                                    <LuLock />
                                </div>
                                Bảo mật tài khoản
                            </li>
                        </NavLink>
                    </ul>
                </aside>
                <main className="md:flex-1 pb-5  mt-5 md:mt-0">{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileLayout
