import { ButtonComponents } from './styles'

interface ButtonProps {
  children: string
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <ButtonComponents onClick={onClick}>{children}</ButtonComponents>
}
