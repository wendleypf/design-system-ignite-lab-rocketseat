import {Meta, Story} from '@storybook/react'
import {Input, InputInputProps, InputRootProps} from './Input'
import {Envelope} from "phosphor-react";

export default {
    title: 'Components/Input',
    component: Input.Root,
    args: {
        children: [
            <Input.InputIcon>
                <Envelope/>
            </Input.InputIcon>,
            <Input.Input placeholder='Type your e-mail address'/>
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<InputRootProps>

export const Default : Story<InputRootProps> = {}
export const WithoutIcon : Story<InputRootProps> = {
    args: {
        children: <Input.Input placeholder='Type your e-mail address'/>
    }
}

