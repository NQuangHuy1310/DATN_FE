import { Link } from 'react-router-dom'
import Input from '../../../components/input/Input'
import { Button } from '../../../components/button/Button'
import { HiOutlineViewGrid, HiSearch, HiChevronRight, HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import config from '../../../config'
import { useEffect, useRef, useState } from 'react'

const Header = () => {
    const [menutoggle, setMenuToggle] = useState<boolean>(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isHovered1, setIsHovered1] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const clickMenuToggle = () => {
        setMenuToggle(!menutoggle)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            overlayRef.current &&
            !overlayRef.current.contains(event.target as Node)
        ) {
            setMenuToggle(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('resize', () => setMenuToggle(false))
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('resize', () => setMenuToggle(false))
        }
    }, [])

    return (
        <header className="bg-white shadow-lg w-full fixed z-50 top-0 left-0">
            <div className="max-w-5xl relative mx-auto grid grid-cols-12 gap-4 px-4 items-center">
                {/* Show menu */}
                <div
                    className="lg:hidden block col-span-4 md:col-span-3 w-fit cursor-pointer"
                    onClick={clickMenuToggle}
                >
                    <HiOutlineMenuAlt1 size={25} />
                </div>
                <div className="lg:col-span-2 max-w-[115px] col-span-4 md:col-span-3 mx-auto md:mx-0 py-4">
                    <img
                        className="w-full"
                        src="https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/logo.png?1707187039390"
                        alt="logo"
                    />
                </div>
                <div className="col-span-2 h-full lg:flex hidden items-center font-semibold w-fit relative group">
                    <div className="flex items-center mx-auto gap-2 cursor-pointer text-callouts-background-primary">
                        <HiOutlineViewGrid className="text-TLG" />
                        <span className="text-TSM">Danh mục</span>
                    </div>
                    <div className="absolute bg-white shadow-lg top-full left-0 w-[200px] opacity-0 translate-y-4 transition-all duration-300 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                        <nav className="w-full">
                            <ul className="*:text-TSM *:px-2">
                                <li>
                                    <Link to={''} className="block py-2 px-2 border-b border-neutral-stroke-primary/50">
                                        Danh mục 1
                                    </Link>
                                </li>
                                <li className="relative hover-trigger">
                                    <Link
                                        to={''}
                                        className="flex items-center justify-between py-2 px-2 border-b border-neutral-stroke-primary/50"
                                    >
                                        Danh mục 2
                                        <HiChevronRight size={18} />
                                    </Link>
                                    <div className="absolute left-full top-0 bg-white shadow-lg opacity-0 invisible hover-trigger-content transition-all duration-300 w-[200px]">
                                        <ul>
                                            <li>
                                                <Link
                                                    to={''}
                                                    className="block py-2 px-2 border-b border-neutral-stroke-primary/50"
                                                >
                                                    Danh mục con 2.1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={''}
                                                    className="block py-2 px-2 border-b border-neutral-stroke-primary/50"
                                                >
                                                    Danh mục con 2.2
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to={''} className="block py-2 px-2 border-b border-neutral-stroke-primary/50">
                                        Danh mục 3
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''} className="block py-2 px-2 border-b border-neutral-stroke-primary/50">
                                        Danh mục 4
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''} className="block py-2 px-2">
                                        Danh mục 5
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="relative col-span-3 md:col-span-3 flex items-center w-fit lg:w-full group mx-[100%] md:mx-0">
                    <div className="md:hidden block w-fit absolute top-[-10px] h-5 -left-2 px-[10px] cursor-pointer">
                        <HiSearch
                            size={20}
                            className="cursor-pointer absolute top-0 left-0 text-callouts-background-primary"
                        />
                    </div>

                    <div className="absolute md:top-auto top-1 w-fit md:w-full md:left-0 left-[-150px] md:block hidden group-hover:block">
                        <div className="lg:max-w-[350px]">
                            <div className="relative lg:w-full md:w-[260px] w-[150px]">
                                <Input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    className="text-T2XS lg:text-TSM bg-neutral-background-primaryWeak w-full pe-7"
                                />
                                <HiSearch className="absolute top-[50%] translate-y-[-50%] text-TLG right-2 cursor-pointer text-callouts-background-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 col-span-1 md:col-span-3 flex gap-2 justify-end cursor-pointer w-fit lg:mx-auto md:mx-[90%]">
                    <span className="text-TSM lg:block hidden">Tất cả khóa học</span>
                    <FaShoppingCart size={20} />
                </div>
                <div className=" items-center justify-end gap-3 col-span-3 py-2 lg:flex hidden">
                    <Button to={config.routes.login} variant="primary">
                        Đăng nhập
                    </Button>
                    <Button variant="secondary">Đăng ký</Button>
                </div>
                {/* Overlay */}
                <div
                    ref={overlayRef}
                    className={`fixed top-0 inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
                        menutoggle ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={() => setMenuToggle(false)}
                ></div>
                {/* Menu repon */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 left-0 z-50 p-2 min-h-screen bg-callouts-background-primary/90 w-2/5 max-w-screen transition-transform duration-300 ${
                        menutoggle ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <nav>
                        <ul className="*:px-2 *:text-white sm:text-TMD text-T2XS">
                            <li className="duration-300">
                                <Link to={''} className="block py-2 px-3 border-b border-white/20">
                                    Trang 1
                                </Link>
                            </li>
                            <li onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                <Link
                                    to={''}
                                    className={`flex border-b border-white/20 items-center justify-between py-2 px-3 ${
                                        isHovered ? 'opacity-70 duration-300' : ''
                                    }`}
                                >
                                    Trang 2
                                    <HiChevronRight
                                        className={`transform transition-transform duration-300 sm:text-TLG text-TSM ${
                                            isHovered ? 'rotate-90' : ''
                                        }`}
                                    />
                                </Link>
                                <nav
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isHovered ? 'max-h-screen' : 'max-h-0'
                                    }`}
                                >
                                    <ul className="py-2 ms:px-4 px-2 sm:*:text-TMD *:text-T3XS">
                                        <li className="">
                                            <Link to={''} className="block ms:px-4 py-2 px-1 border-b border-white/20">
                                                Danh mục 2.1
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to={''} className="block ms:px-4 py-2 px-1 border-b border-white/20">
                                                Danh mục 2.2
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to={''} className="block ms:px-4 py-2 px-1 border-b border-white/20">
                                                Danh mục 2.3
                                            </Link>
                                        </li>
                                        <li
                                            onMouseEnter={() => setIsHovered1(true)}
                                            onMouseLeave={() => setIsHovered1(false)}
                                        >
                                            <Link
                                                to={''}
                                                className={`flex border-b border-white/20 items-center justify-between ms:px-4 py-2 px-1 ${
                                                    isHovered1 ? 'opacity-70 duration-300' : ''
                                                }`}
                                            >
                                                Danh mục 2.4
                                                <HiChevronRight
                                                    className={`transform transition-transform duration-300 sm:text-TLG text-TSM ${
                                                        isHovered1 ? 'rotate-90' : ''
                                                    }`}
                                                />
                                            </Link>
                                            <nav
                                                className={`overflow-hidden transition-all duration-300 ${
                                                    isHovered1 ? 'max-h-screen' : 'max-h-0'
                                                }`}
                                            >
                                                <ul className="ms:py-2 ms:px-4 px-2 sm:*:text-TMD *:text-T3XS">
                                                    <li className="">
                                                        <Link
                                                            to={''}
                                                            className="block ms:px-4 ms:py-2 p-1 border-b border-white/20"
                                                        >
                                                            Danh mục 2.4.1
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link
                                                            to={''}
                                                            className="block ms:px-4 ms:py-2 p-1 border-b border-white/20"
                                                        >
                                                            Danh mục 2.4.2
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link
                                                            to={''}
                                                            className="block ms:px-4 ms:py-2 p-1 border-b border-white/20"
                                                        >
                                                            Danh mục 2.4.3
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                            <li className="">
                                <Link to={''} className="block py-2 px-3 border-b border-white/20">
                                    Trang 3
                                </Link>
                            </li>
                            <li className="">
                                <Link to={''} className="block py-2 px-3 border-b border-white/20">
                                    Trang 4
                                </Link>
                            </li>
                            <li className="">
                                <Link to={''} className="block py-2 px-3 border-b border-white/20">
                                    Trang 5
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
