import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
    ' flex items-center justify-center whitespace-normal rounded-lg bg-transparent border-transparent  font-semibold',
    {
        variants: {
            variant: {
                primary:
                    'border-[2px] bg-callouts-background-primary text-white hover:bg-interactive-primary-hover hover:transition-all focus:border-2px border-interactive-primary-default shadow-lg',
                secondary:
                    'border-[2px] border-callouts-background-primary bg-white hover:bg-interactive-background-primaryHoverWeak text-interactive-primary-default shadow-lg',
                disable:
                    'border-[2px] bg-neutral-disabled-strong text-neutral-disabled-default hover:text-neutral-disabled-weak hover:transition-all cursor-not-allowed shadow-lg'
            },
            size: {
                default: 'px-lg py-md',
                md: 'px-3.5 py-2.5 text-TSM',
                lg: 'px-xl py-2.5 text-TMD',
                xl: 'px-lg py-3.5 text-TMD',
                icon: 'h-10 w-10'
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default'
        }
    }
)

type ButtonProps = VariantProps<typeof buttonStyles> &
    ComponentProps<'button'> & {
        to?: string
        href?: string
        type?: string
        leftIcon?: React.ReactNode
        rightIcon?: React.ReactNode
        disabled?: boolean
        children?: string | React.ReactNode
        onClick?: () => void
    }

export const Button = ({
    variant,
    size,
    className,
    to,
    href,
    type,
    leftIcon,
    rightIcon,
    disabled,
    onClick,
    children
}: ButtonProps) => {
    let Comp: ElementType = 'button'
    const props: any = { onClick }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (type) {
        props.type = type
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={twMerge(buttonStyles({ variant, size }), className)} {...props} onClick={onClick}>
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </Comp>
    )
}
