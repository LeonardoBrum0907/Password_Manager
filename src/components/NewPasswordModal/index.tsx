import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { Button } from '../Button'
import { Content } from './styles'
import { ListContext } from 'src/context/ListContext'
import jwtDecode from 'jwt-decode'
import { JwtPayload } from 'src/auth'
import Cookies from 'js-cookie'

interface NewPasswordModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewPasswordModal({
  isOpen,
  onRequestClose,
}: NewPasswordModalProps) {
  const { createList } = useContext(ListContext)
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

  async function handleCreateNewPassword(event: FormEvent) {
    event.preventDefault() // previne o comportamento padrão do modal, que é regarregar a pagina toda vez que é enviado um formulario

    const token = Cookies.get('token')

    if (token) {
      const decodedToken: JwtPayload = jwtDecode(token)

      await createList({
        id: decodedToken.id,
        identifier,
        password,
      })
    }

    setIdentifier('') // vai apagar o valores do modal e fechar o modal caso o cadastro de certo
    setPassword('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Content onSubmit={handleCreateNewPassword}>
        <h1>Register new</h1>

        <p>Identifier</p>
        <input
          type="text"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)} // onChange é uma função que executa toda vez que o valor do input for alterado, devolvendo evento(event), com o event.target.value eu consigo ter acesso ao valor do input, então eu passei o valor do input no setIdentifier.
        />

        <p>Your Password</p>
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)} // event.target.value sempre vai retornar uma string, caso eu queira um numero, tenho que colocar (Number(event.target.value))
        />

        <Button>Save</Button>
      </Content>
    </Modal>
  )
}
