import React from 'react'
import { HiOutlineXCircle } from 'react-icons/hi'

import { Button } from '~/components/ui/button/Button'
import { SlideOutPanelProps } from '~/types/ISlideOutPanel'

const SlideOutPanel: React.FC<SlideOutPanelProps> = ({
    isVisible,
    onClose,
    title,
    buttonText,
    onButtonClick,
    children
}) => {
    return (
        <>
            {isVisible && <div className="fixed inset-0 bg-black opacity-50 z-[998]" onClick={onClose} />}
            <div
                className={`fixed top-0 right-0 min-h-screen md:w-[48vw] w-full bg-white z-[999] transition-transform duration-500 ease-in-out overflow-y-auto ${
                    isVisible ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="absolute right-5 top-2 cursor-pointer" onClick={onClose}>
                    <HiOutlineXCircle className="size-6" />
                </div>
                <div className="px-12">
                    {buttonText && onButtonClick && (
                        <Button className="mb-4" variant="primary" onClick={onButtonClick}>
                            {buttonText}
                        </Button>
                    )}
                    <h2 className="text-TLG font-semibold mb-4">{title}</h2>
                    <div className="overflow-y-auto max-h-screen">{children}</div>
                </div>
            </div>
        </>
    )
}

export default SlideOutPanel
