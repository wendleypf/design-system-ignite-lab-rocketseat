import {Meta, Story} from '@storybook/react'
import {Heading, HeadingProps} from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        size: 'md',
        children: 'Lorem ipsum'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<HeadingProps>

export const Default : Story<HeadingProps> = {}
export const Small : Story<HeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large : Story<HeadingProps> = {
    args: {
        size: 'lg'
    }
}
export const CustomComponent : Story<HeadingProps> = {
    args: {
        asChild: true,
        children: <h1>Heading with H1 tag</h1>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

