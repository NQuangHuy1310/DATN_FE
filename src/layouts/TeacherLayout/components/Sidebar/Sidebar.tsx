import { Link } from 'react-router-dom'
import { sidebarConstants } from '~/constants/sidebarConstants'
import { sidebarItemType } from '~/types/common'

const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 bottom-0 bg-[#2d2f31] w-[65px] h-full z-10 text-white shadow-md transition-width transition-custom duration-700 hover:w-[316px] overflow-hidden">
            <div className="flex flex-col items-start">
                <div className="flex items-center w-full h-[56px] p-2 cursor-pointer hover:bg-interactive-primary-hover hover:transition-all duration-300">
                    <img
                        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                        alt=""
                        className="size-6 object-contain flex-1"
                    />
                </div>
                {sidebarConstants.map((item: sidebarItemType, index: number) => {
                    const IconSidebar = item.icon

                    return (
                        <Link
                            to={item.route}
                            className="flex items-center w-full h-[56px] p-4 gap-5 cursor-pointer hover:bg-interactive-primary-hover hover:transition-all duration-300 rounded-md"
                            key={index}
                        >
                            {IconSidebar && <IconSidebar className="size-6 flex-shrink-0" />}
                            <div className="truncate text-TXL font-semibold">{item.title}</div>
                        </Link>
                    )
                })}
            </div>
        </aside>
    )
}

export default Sidebar
