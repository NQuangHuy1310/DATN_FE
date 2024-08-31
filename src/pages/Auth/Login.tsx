import { FaFacebook } from "react-icons/fa"

import { FcGoogle } from "react-icons/fc"
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { Button } from "../../components/button/Button"
import Input from "../../components/input/Input"
import { useState } from "react"
import config from "../../config"


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (

        <div className="relative h-screen">
            <div className="w-full max-w-[456px] h-auto p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                <div>
                    <h1 className="font-bold text-DSM text-center">Đăng nhập</h1>
                    <p className="my-5 text-center text-gray-400">
                        Bạn chưa có tài khoản?
                        <Link className="text-callouts-background-primary" to={config.routes.home}>
                            {' '} Đăng ký
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3 justify-center mb-3">
                    <div className="w-20 h-10 sm:w-24 sm:h-11 rounded-xl py-2 px-6 border">
                        <FaFacebook className="w-6 h-6 mx-auto text-callouts-background-primary" />
                    </div>
                    <div className="w-20 h-10 sm:w-24 sm:h-11 rounded-xl py-2 px-6 border">
                        <FcGoogle className="w-6 h-6 mx-auto" />
                    </div>
                </div>
                <div className="flex items-center justify-center my-6">
                    <div className="w-10 border-t border-gray-300 flex-grow ms-6 me-2"></div>
                    <span className="text-gray-400">hoặc đăng nhập email</span>
                    <div className="w-10 border-t border-gray-300 flex-grow ms-2 me-6"></div>
                </div>
                <div className="flex items-center justify-center">
                    <form action="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                        <div className="w-full mb-4">
                            <label htmlFor="email" className="font-medium text-TMD">
                                Email
                            </label>
                            <Input
                                type="text"
                                placeholder="Email"
                                name="email"
                                id="email"
                                className="w-full mt-2"
                            />
                        </div>
                        <div className="w-full relative mb-4">
                            <label htmlFor="password" className="font-medium text-TMD">
                                Mật khẩu
                            </label>
                            <Input
                                type={showPassword ? "text" : "password"} // Thay đổi type dựa trên state
                                name="password"
                                id="password"
                                placeholder="Mật khẩu"
                                className="w-full mt-2"
                            />
                            {showPassword ? (
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500"
                                />
                            ) : (
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500"
                                />
                            )}
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <Input type="checkbox" className=" w-3 h-3  bg-gray-100 border-gray-300 rounded focus:ring-1 focus:ring-blue-500" />
                                <span className="ml-2 text-TSM text-gray-400 font-medium">Ghi nhớ</span>
                            </div>
                            <div>
                                <Link to={"/abc"} className="text-callouts-background-primary font-medium text-TSM">
                                    Quên mật khẩu?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Button className="w-full">Đăng nhập</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};


export default Login
