export interface SlideOutPanelProps {
    isVisible: boolean
    onClose: () => void
    title: string
    buttonText?: string
    onButtonClick?: () => void
    children: React.ReactNode
}
