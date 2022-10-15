import {InputHTMLAttributes, ReactNode} from 'react'
import {clsx} from 'clsx'
import {Slot} from '@radix-ui/react-slot'

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export type InputRootProps = {
  children: ReactNode
}

export type InputIconProps = {
  children: ReactNode
}

const InputRoot = ({children}: InputRootProps) => {
  return <div className={clsx('flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 h-12')}>
    {children}
  </div>
}

InputRoot.displayName = 'Input.Root'

const InputIcon = ({children}: InputIconProps) => {
  return <Slot className={clsx('w-6 h-6 text-gray-400')}>{children}</Slot>
}
InputIcon.displayName = 'Input.Icon'

const InputInput = (props: InputInputProps) => {
  return <input className={clsx('bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400')} {...props}/>
}
InputInput.displayName = 'Input.Input'


export const Input = {
  Root: InputRoot,
  Input: InputInput,
  InputIcon: InputIcon
}