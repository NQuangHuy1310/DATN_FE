import config from '~/config'

import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="flex items-center justify-end pr-6 h-14">
            <div className="flex items-center justify-center gap-6">
                <Link to={config.routes.home}>
                    <p className="text-TMD">Học viên</p>
                </Link>
                <div className="cursor-pointer">
                    <FaBell className="size-5" />
                </div>
                {/* User Button */}
            </div>
        </header>
    )
}

export default Header
