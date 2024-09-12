import { SiCoursera } from 'react-icons/si'
import { MdBarChart } from 'react-icons/md'
import { IoChatbox } from 'react-icons/io5'

import { sidebarItemType } from '~/types/common'

export const sidebarConstants: sidebarItemType[] = [
    {
        title: 'Khoá học',
        route: '',
        icon: SiCoursera,
        isActive: true
    },
    {
        title: 'Giao tiếp',
        route: '',
        icon: IoChatbox,
        isActive: false
    },
    {
        title: 'Hiệu xuất',
        route: '',
        icon: MdBarChart,
        isActive: false
    }
]
