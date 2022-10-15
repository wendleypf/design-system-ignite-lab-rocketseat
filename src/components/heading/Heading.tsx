import {ReactNode} from 'react'
import {Slot} from '@radix-ui/react-slot'
import {clsx} from 'clsx'

export type HeadingProps = {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?: boolean
}

export const Heading = ({size = 'md', asChild, children}: HeadingProps) => {
    const Comp = asChild ? Slot: 'h2'

    return <Comp className={clsx('text-gray-100 font-bold font-sans', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-xxl': size === 'lg',
    })}>{children}</Comp>
}