import { Box, Content, Container } from "./styles";
import show from "../../assets/visibilityBlack.svg";
import hide from "../../assets/visibilityOffBlack.svg";
import { NewPasswordModal } from "../NewPasswordModal";
import { useContext, useState } from "react";
import { ListContext } from "../../ListContext";
import { Button } from "../Button";

export function List() {
  const { lists } = useContext(ListContext);

  const [isNewPasswordModal, setIsNewPasswordModal] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);

  const [id, setId] = useState(0);

  function handleOpenNewPasswordModal() {
    setIsNewPasswordModal(true);
  }

  function handleCloseNewPasswordModal() {
    setIsNewPasswordModal(false);
  }

  function ocultPassword() {
    if (hidePassword === true) {
      setHidePassword(false);
    } else {
      setHidePassword(true);
    }

    return hidePassword;
  }

  return (
    <Container>
      <h1>My Passwords</h1>
      <Content>
        <table>
          <tbody>
            {lists.map((list) => (
              <tr key={list.id}>
                <td>{list.identifier}</td>

                {hidePassword && list.id === id ? (
                  <td id={String(list.id)} className="teste">
                    {list.password}
                  </td>
                ) : (
                  <td id={String(list.id)} className="hide">
                    {list.password}
                  </td>
                )}

                <Box
                  onClick={() => {
                    setId(list.id);
                    ocultPassword();
                  }}
                >
                  {hidePassword && list.id === id ? (
                    <img id="img" src={hide} alt="Ocultar" />
                  ) : (
                    <img id="img" src={show} alt="Ocultar" />
                  )}
                </Box>
              </tr>
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
