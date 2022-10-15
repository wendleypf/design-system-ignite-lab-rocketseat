import {Meta, Story} from '@storybook/react'
import {Text, TextProps} from './Text'

export default {
    title: 'Components/Text',
    component: Text,
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
} as Meta<TextProps>

export const Default : Story<TextProps> = {}
export const Small : Story<TextProps> = {
    args: {
        size: 'sm'
    }
}
export const Large : Story<TextProps> = {
    args: {
        size: 'lg'
    }
}
export const CustomComponent : Story<TextProps> = {
    args: {
        asChild: true,
        children: <p>Text with P tag</p>
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

