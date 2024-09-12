import { IconType } from 'react-icons'

export interface sidebarItemType {
    title: string
    route: string
    image?: string
    isActive: boolean
    icon?: IconType
    children?: sidebarItemType[]
}
