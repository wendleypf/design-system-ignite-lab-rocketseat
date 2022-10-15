import './styles/global.css'
import {Heading, Text, Logo, Input, Checkbox, Button} from './components'
import {Envelope, Lock} from 'phosphor-react'

export const App = () => {
  return (<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
    <header className='flex flex-col items-center'>
      <Logo/>
      <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
      <Text size='lg' className='text-gray-400 mt-1'>Faça Login e comece a usar !</Text>
    </header>
    <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
      <label htmlFor='email' className='flex flex-col gap-3'>
        <Text className='font-semibold'>E-mail</Text>
        <Input.Root>
          <Input.InputIcon>
            <Envelope/>
          </Input.InputIcon>
          <Input.Input id='email' type='email' placeholder='Digite seu e-mail'/>
        </Input.Root>
      </label>
      <label htmlFor='password' className='flex flex-col gap-3'>
        <Text className='font-semibold'>Senha</Text>
        <Input.Root>
          <Input.InputIcon>
            <Lock/>
          </Input.InputIcon>
          <Input.Input id='password' type='password' placeholder='Digite sua senha'/>
        </Input.Root>
      </label>
      <label htmlFor='remember' className='flex items-center gap-2'>
        <Checkbox id='remember'/>
        <Text size='sm' className='text-gray-200'>Lembrar por 30 dias</Text>
      </label>
      <Button type='submit' className='mt-4'>Login</Button>
    </form>
    <footer className='flex flex-col items-center gap-4 mt-8'>
      <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
      </Text>
      <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora !</a>
      </Text>
    </footer>
  </div>)
}
