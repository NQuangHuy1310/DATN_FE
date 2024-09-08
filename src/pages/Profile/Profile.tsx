import { useRef, useState } from 'react'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'

import { Button } from '~/components/ui/button/Button'
import Input from '~/components/ui/input/Input'

const Profile = () => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="">
            <h3 className=" font-bold md:text-DMD text-DSM my-5 ">Thông tin cá nhân</h3>
            <div className="">
                <div className="rounded-xl text-TSM shadow mb-5">
                    <div className="p-5">
                        <h1 className="text-DXS mb-3">Hồ sơ của tôi</h1>
                        <div className="border-2 rounded-lg flex flex-col md:flex-row gap-4 p-4 max-w-[660px]">
                            <div className="relative">
                                <img
                                    src="https://via.placeholder.com/80"
                                    className="w-20 h-20 rounded-lg object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div className="flex-grow">
                                <Input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="*" />
                                <div className="flex gap-4">
                                    <Button
                                        className="border border-blue-500 bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600"
                                        onClick={handleClick}
                                    >
                                        Tải ảnh lên
                                    </Button>
                                    <Button className="border border-red-500 text-red-500 bg-white py-2 px-4 rounded-xl hover:bg-red-500 hover:text-white">
                                        Xóa ảnh
                                    </Button>
                                </div>
                                <p className="text-gray-500 text-sm mt-2">Vui lòng tải ảnh kích cỡ dưới 3mb</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 max-w-[660px]">
                        <form>
                            <div className="grid grid-cols-12 gap-4 my-3">
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="fullName">Họ và tên</label>
                                    <Input type="text" className="w-full mt-2" name="fullName" id="fullName" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="email">Email</label>
                                    <Input type="text" className="w-full mt-2" name="email" id="email" />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 my-3">
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="phone">Số điện thoại</label>
                                    <Input type="text" className="w-full mt-2" name="phone" id="phone" />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="address">Địa chỉ</label>
                                    <Input type="text" className="w-full mt-2" name="address" id="address" />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 my-3">
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="education" className="block text-sm">
                                        Trình độ học vấn
                                    </label>
                                    <select
                                        id="education"
                                        name="education"
                                        className="border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md h-[40px] text-TMD text-black font-normal focus:border-interactive-stroke-primaryFocus w-full mt-2"
                                    >
                                        <option value="">Đại học</option>
                                        <option value="cao_dang">Cao đẳng</option>
                                        <option value="thac_si">Thạc sĩ</option>
                                        <option value="tien_si">Tiến sĩ</option>
                                    </select>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="experience">Kinh nghiệm</label>
                                    <Input type="text" name="experience" id="experience" className="w-full mt-2" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="bio" className="block">
                                    Tiểu sử
                                </label>
                                <textarea
                                    rows={4}
                                    id="bio"
                                    name="bio"
                                    className="w-full block p-2.5 text-sm rounded-lg border-[1px] border-neutral-stroke-primary focus:border-interactive-stroke-primaryFocus mt-2"
                                ></textarea>
                            </div>
                            <Button className="my-5">Lưu thay đổi</Button>
                        </form>
                    </div>
                </div>

                <div className="rounded-xl text-TSM shadow mb-5">
                    <div className="p-5">
                        <h3 className="text-DXS font-medium">Mật khẩu</h3>
                        <form className="max-w-[346px]">
                            <div className="w-full relative mb-4">
                                <label htmlFor="password">Mật khẩu hiện tại</label>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    className="w-full mt-2"
                                />
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500 ${
                                        showPassword ? 'hidden' : 'block'
                                    }`}
                                />
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500 ${
                                        showPassword ? 'block' : 'hidden'
                                    }`}
                                />
                            </div>
                            <div className="w-full relative mb-4">
                                <label htmlFor="new_password">Mật khẩu mới</label>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name="new_password"
                                    id="new_password"
                                    className="w-full mt-2"
                                />
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500 ${
                                        showPassword ? 'hidden' : 'block'
                                    }`}
                                />
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500 ${
                                        showPassword ? 'block' : 'hidden'
                                    }`}
                                />
                            </div>
                            <div className="w-full relative mb-4">
                                <label htmlFor="confirm_password">Xác nhận mật khẩu</label>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirm_password"
                                    id="confirm_password"
                                    className="w-full mt-2"
                                />
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500 ${
                                        showPassword ? 'hidden' : 'block'
                                    }`}
                                />
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className={`absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500 ${
                                        showPassword ? 'block' : 'hidden'
                                    }`}
                                />
                            </div>
                            <Button className="my-5">Lưu thay đổi</Button>
                        </form>
                    </div>
                </div>
                {/* <div className="rounded-xl text-TSM shadow">
                    <div className="p-5">
                        <h3 className="text-DXS font-medium mb-3">Mạng xã hội</h3>
                        <p>Kết nối tài khoản facebook, google để đăng nhập nhanh chóng.</p>
                        <div className="max-w-[678px] mt-3">

                            <div>
                                <p className="font-medium">Kết nối với facebook</p>
                                <div className="md:flex justify-between gap-10 p-5 border rounded-xl my-5">
                                    <div className="flex gap-10">
                                        <FaFacebookSquare className="w-24 h-11 md:w-11 md:h11 text-callouts-background-primary" />
                                        <p className="text-TSM mb-5 md:mb-0">Bạn đã kết nối thành công với facebook. Bạn
                                            có thể dễ dàng đăng nhập bằng tài khoản facebook của bạn.</p>
                                    </div>

                                    <Button className=" h-9 ">Xóa </Button>
                                </div>
                            </div>

                            <div>
                                <p className="font-medium">Kết nối với Google</p>
                                <div className="md:flex justify-between gap-10 p-5 border rounded-xl my-5">
                                    <div className="flex gap-10">
                                        <FcGoogle className="w-24 h-11 md:w-11 md:h-11 text-callouts-background-primary" />
                                        <p className="text-TSM mb-5 md:mb-0">Bạn đã kết nối thành công với Google. Bạn
                                            có thể dễ dàng đăng nhập bằng tài khoản Google của bạn.</p>
                                    </div>
                                    <Button className="h-9">Xóa </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Profile
