import { useContext, useState } from "react";
import { ListContext } from "../../ListContext";
import { Button } from "../Button";
import { NewPasswordModal } from "../NewPasswordModal";
import { Password } from "../Password";
import { Container, Content } from "./styles";

export function List() {
  const { lists } = useContext(ListContext);

  const [isNewPasswordModal, setIsNewPasswordModal] = useState(false);
  
  function handleOpenNewPasswordModal() {
    setIsNewPasswordModal(true);
  }

  function handleCloseNewPasswordModal() {
    setIsNewPasswordModal(false);
  }

  return (
    <Container>
      <h1>My Passwords</h1>
      <Content>
        <table>
          <tbody>
            {lists.map((list) => (
              <Password key={list.id} list={list} />
            ))}
          </tbody>
        </table>
      </Content>

      <NewPasswordModal
        isOpen={isNewPasswordModal}
        onRequestClose={handleCloseNewPasswordModal}
      />

      <Button onClick={handleOpenNewPasswordModal}>
        Register new
      </Button>
    </Container>
  );
}
