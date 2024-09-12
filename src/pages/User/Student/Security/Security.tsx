import { useState } from 'react'

import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'

import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'

const Security = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <div className=" rounded-lg md:rounded-e text-TSM border mx-auto mb-5">
                <div className="border-b text-center p-5">
                    <h3 className=" font-bold md:text-DMD  text-DSM">Tài khoản</h3>
                    <p>Chỉnh sửa cài đặt tài khoản của bạn và thay đổi mật khẩu của bạn ở đây.</p>
                </div>
                <div className="px-5 max-w-[560px] mx-auto py-10">
                    <form >
                        <div className="">
                            <label htmlFor="email" className="text-TXL font-medium">Email</label>
                            <Input type="email" id="email" value='abc@gmail.com' className="w-full my-2" />
                        </div>

                        <div className="mt-5">
                            <h3 className="text-TXL font-medium">Mật khẩu</h3>
                            <div className="w-full relative mb-4">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    className="w-full mt-2"
                                    placeholder="Mật khẩu hiện tại"
                                />
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/3 transform translate-y-1/2 cursor-pointer text-gray-500 ${showPassword ? 'hidden' : 'block'
                                        }`}
                                />
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/3 transform translate-y-1/2 cursor-pointer text-gray-500 ${showPassword ? 'block' : 'hidden'
                                        }`}
                                />
                            </div>
                            <div className="w-full relative mb-4">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name="new_password"
                                    id="new_password"
                                    className="w-full mt-2"
                                    placeholder="Mật khẩu mới"
                                />
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/3 transform translate-y-1/2 cursor-pointer text-gray-500 ${showPassword ? 'hidden' : 'block'
                                        }`}
                                />
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/3 transform translate-y-1/2 cursor-pointer text-gray-500 ${showPassword ? 'block' : 'hidden'
                                        }`}
                                />
                            </div>
                            <div className="w-full relative mb-4">

                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirm_password"
                                    id="confirm_password"
                                    className="w-full mt-2"
                                    placeholder="Xác nhận mật khẩu"
                                />
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/3 transform translate-y-1/2 cursor-pointer text-gray-500 ${showPassword ? 'hidden' : 'block'
                                        }`}
                                />
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/3 transform translate-y-1/2 cursor-pointer text-gray-500 ${showPassword ? 'block' : 'hidden'
                                        }`}
                                />
                            </div>
                        </div>
                        <Button className="my-5">Đổi mật khẩu</Button>
                    </form>
                </div >

            </div>
        </div >
    )
}

export default Security