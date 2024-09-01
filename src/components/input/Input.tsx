import * as React from 'react'
import { twMerge } from 'tailwind-merge'
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={twMerge(
                'border-[1px] outline-none border-neutral-stroke-primary rounded-md px-lg py-md h-[40px] text-TMD text-black font-normal focus:border-interactive-stroke-primaryFocus',
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Input.displayName = 'Input'

export default Input
