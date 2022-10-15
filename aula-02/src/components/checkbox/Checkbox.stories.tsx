import {Meta, Story} from '@storybook/react'
import {Checkbox, CheckboxProps} from './Checkbox'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        children: 'Create account'
    },
    argTypes: {}
} as Meta<CheckboxProps>

export const Default : Story<CheckboxProps> = {}

