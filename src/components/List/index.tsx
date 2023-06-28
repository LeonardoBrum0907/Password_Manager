import { useContext, useEffect, useState } from 'react'
import { Button } from '../Button'
import { NewPasswordModal } from '../NewPasswordModal'
import { Password } from '../Password'
import { Container, Content } from './styles'
import { ListContext } from 'src/context/ListContext'

export function List() {
  const { lists } = useContext(ListContext)

  const [isListLoaded, setIsListLoaded] = useState(false)
  const [isNewPasswordModal, setIsNewPasswordModal] = useState(false)

  function handleOpenNewPasswordModal() {
    setIsNewPasswordModal(true)
  }

  function handleCloseNewPasswordModal() {
    setIsNewPasswordModal(false)
  }

  useEffect(() => {
    if (lists.length > 0) {
      setIsListLoaded(true) // Atualiza o estado para indicar que a lista foi carregada
    }
  }, [lists])

  if (!isListLoaded) {
    return <p>Loading...</p> // Exibe uma mensagem de carregamento enquanto a lista está sendo buscada
  }

  return (
    <Container>
      <h1>My Passwords</h1>
      <Content>
        <table>
          <tbody>
            {lists.map((list) => (
              <Password key={list._id} list={list} />
            ))}
          </tbody>
        </table>
      </Content>

      <NewPasswordModal
        isOpen={isNewPasswordModal}
        onRequestClose={handleCloseNewPasswordModal}
      />

      <Button onClick={handleOpenNewPasswordModal}>Register new</Button>
    </Container>
  )
}
