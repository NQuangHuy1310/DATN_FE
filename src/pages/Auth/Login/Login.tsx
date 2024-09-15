import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'

import config from '~/config'
import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="max-w-[550px] mx-auto rounded-xl mt-32 border shadow p-10">
            <div>
                <h1 className='text-TXL font-medium mb-1'>Đăng nhập để tiếp tục</h1>
                <p className='text-gray-500'>Sử dụng tài khoản email hoặc dịch vụ khác để đăng nhập</p>
            </div>
            <div className="mt-5 text-center">
                <form action="" className="max-w-[400px] mx-auto">
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
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <Input
                                type="checkbox"
                                className=" w-3 h-3  bg-gray-100 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                id="agree"
                            />
                            <label
                                htmlFor="agree"
                                className="ml-2 text-TSM text-gray-400 font-medium cursor-pointer"
                            >
                                Ghi nhớ tài khoản
                            </label>
                        </div>
                        <div>
                            <Link
                                to={config.routes.forgotPassword}
                                className="text-callouts-background-primary font-medium text-TSM"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Button className="w-full">Đăng nhập</Button>
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
                        <p className='text-gray-500'>Bạn chưa có tài khoản? <Link to={config.routes.register} className='text-callouts-background-primary'>Đăng ký</Link></p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
