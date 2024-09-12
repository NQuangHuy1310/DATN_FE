import { HiOutlineXCircle } from 'react-icons/hi'

import { Button } from '~/components/ui/button/Button'
import { PopupProps } from '~/types/IPopup'

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }
    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleBackdropClick}
        >
            <div className="bg-white w-11/12 md:w-3/5 p-4 rounded-lg shadow-lg ">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-TLG font-semibold max-w-[90%]">{title}</h2>
                    <div className="text-neutral-primary-weak cursor-pointer" onClick={onClose}>
                        <HiOutlineXCircle className="size-6" />
                    </div>
                </div>
                <div className="overflow-y-auto max-h-[60vh]">{children}</div>
                <div className="flex justify-end mt-4">
                    <Button onClick={onClose}>Close</Button>
                </div>
            </div>
        </div>
    )
}

export default Popup
