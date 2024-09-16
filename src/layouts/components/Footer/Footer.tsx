import { Link } from 'react-router-dom'
import { HiOutlinePhone, HiPhone, HiMail } from 'react-icons/hi'
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarked } from 'react-icons/fa'

import { Button } from '~/components/ui/button/Button'
import Input from '~/components/ui/input/Input'

const Footer = () => {
    return (
        <footer className="bg-[url('https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/bg_footer.png?1707187039390')] bg-cover bg-center bg-[#000] py-10">
            <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 px-5 md:gap-16 md:px-10">
                <div className="lg:col-span-4 col-span-12">
                    <div className="md:max-w-[230px] max-w-[150px]">
                        <img
                            src="https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/logo-footer.png?1707187039390"
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-wrap items-center py-4 gap-2 *:text-white *:bg-callouts-background-primary/60 *:md:text-TXL *:p-2 *:w-10 *:h-10 *:text-TSM *:rounded-lg">
                        <HiOutlinePhone />
                        <FaInstagram />
                        <FaFacebook />
                        <FaYoutube />
                    </div>
                    <div className="py-4 md:w-full w-[90%]">
                        <span className="uppercase text-white font-bold text-TMD block py-2">Đăng ký để nhận tin</span>
                        <form action="" className="relative w-full">
                            <Input placeholder="Nhập email của bạn" className="text-TMD w-full" />
                            <Button className="absolute top-[-2px] py-[5.3px] -right-1">Gửi</Button>
                        </form>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 text-white">
                            <FaMapMarked />
                            <span className="text-TSM">266 Đội Cấn, Liễu Giai, Hà Nội,</span>
                        </div>
                        <div className="flex items-center py-2 gap-2 text-white">
                            <HiPhone />
                            <span className="text-TSM">1900 6750</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <HiMail />
                            <span className="text-TSM">aventteam@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 col-span-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="col-span-1">
                            <h2 className="uppercase text-white text-TMD font-semibold">Về Udemy</h2>
                            <ul className="text-TSM py-4 leading-8 text-white/80 hover:*:text-callouts-background-primary duration-150 font-medium">
                                <li>
                                    <Link to={''}>Trang 1</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 2</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 3</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 4</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 5</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h2 className="uppercase text-white text-TMD font-semibold">Trợ giúp</h2>
                            <ul className="text-TSM py-4 leading-8 text-white/80 hover:*:text-callouts-background-primary duration-150 font-medium">
                                <li>
                                    <Link to={''}>Trang 1</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 2</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 3</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 4</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 5</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h2 className="uppercase text-white text-TMD font-semibold">Hợp tác liên kết</h2>
                            <ul className="text-TSM py-4 leading-8 text-white/80 hover:*:text-callouts-background-primary duration-150 font-medium">
                                <li>
                                    <Link to={''}>Trang 1</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 2</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 3</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 4</Link>
                                </li>
                                <li>
                                    <Link to={''}>Trang 5</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="uppercase text-TMD text-white font-semibold">Hình thức thanh toán</h2>
                        <div className="py-4">
                            <img
                                src="https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/payment.png?1707187039390"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
