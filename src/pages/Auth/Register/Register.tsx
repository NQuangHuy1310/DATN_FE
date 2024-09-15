import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'

import config from '~/config'
import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="max-w-[550px] mx-auto rounded-xl mt-32 border shadow p-10">
            <div>
                <h1 className='text-TXL font-medium mb-1'>Đăng ký để tiếp tục</h1>
                <p className='text-gray-500'>Sử dụng tài khoản email hoặc dịch vụ khác để đăng ký</p>
            </div>
            <div className="mt-5 text-center">
                <form action="" className="max-w-[400px] mx-auto">
                    <div className="w-full mb-4">
                        <Input type="text" placeholder="Họ và tên" name="fullName" id="fullName" className="w-full mt-2" />
                    </div>
                    <div className="w-full mb-4">
                        <Input type="text" placeholder="Email" name="email" id="email" className="w-full mt-2" />
                    </div>
                    <div className="w-full relative mb-4">
                        <Input
                            type={showPassword ? 'text' : 'password'} // Thay đổi type dựa trên state
                            name="password"
                            id="password"
                            placeholder="Mật khẩu"
                            className="w-full mt-2"
                        />
                        {showPassword ? (
                            <IoEyeOffSharp
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/4 transform translate-y-1/2 cursor-pointer text-gray-500"
                            />
                        ) : (
                            <IoEyeSharp
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/4 transform translate-y-1/2 cursor-pointer text-gray-500"
                            />
                        )}
                    </div>
                    <div className="w-full relative mb-4">
                        <Input
                            type={showPassword ? 'text' : 'password'} // Thay đổi type dựa trên state
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Xác nhận mật khẩu"
                            className="w-full mt-2"
                        />
                        {showPassword ? (
                            <IoEyeOffSharp
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/4 transform translate-y-1/2 cursor-pointer text-gray-500"
                            />
                        ) : (
                            <IoEyeSharp
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/4 transform translate-y-1/2 cursor-pointer text-gray-500"
                            />
                        )}
                    </div>

                    <div>
                        <Button className="w-full">Đăng ký</Button>
                    </div>
                    <div className='mt-5 flex flex-row justify-center gap-5 md:gap-0 md:flex-col '>
                        <div className='flex items-center gap-10 border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md h-[40px] text-TMD text-black font-normal focus:border-interactive-stroke-primaryFocus'>
                            <FaFacebook className='text-callouts-background-primary size-6 ' />
                            <span className='font-medium hidden md:block'>Đăng nhập với Facebook</span>
                        </div>
                        <div className='flex items-center gap-10 border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md h-[40px] text-TMD text-black font-normal focus:border-interactive-stroke-primaryFocus md:mt-3'>
                            <FcGoogle className='text-callouts-background-primary size-6' />
                            <span className='font-medium hidden md:block'>Đăng nhập với Google</span>
                        </div>

                    </div>
                    <div className='text-start mt-5'>
                        <p className='text-gray-500'>Bạn đã có tài khoản? <Link to={config.routes.login} className='text-callouts-background-primary'>Đăng nhập</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
