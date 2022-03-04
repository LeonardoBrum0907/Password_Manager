import { Box, Content, Container } from "./styles";
import  visibilityBlack  from "../../assets/visibilityBlack.svg";
import { NewPasswordModal } from "../NewPasswordModal";
import { useContext, useState } from "react";
import { ListContext } from "../../ListContext";


export function List() {  

    const { lists } = useContext(ListContext);

    const [isNewPasswordModal, setIsNewPasswordModal] = useState(false);

    function handleOpenNewPasswordModal() {
        setIsNewPasswordModal(true);
      }
    
    function handleCloseNewPasswordModal() {
        setIsNewPasswordModal(false);
      }

    function handleHidePassword() {
        let  button = document.getElementById("action-btn") as HTMLButtonElement;

        button.addEventListener("click", function() {
            let container = document.getElementById("container") as HTMLTableElement;

            container.classList.toggle("hide");
        })

    }
    
    return (
        <Container>
            <h1>My Passwords</h1>
            <Content>
           
                <table> 

                    <tbody>
                        {lists.map(list => (
                            <tr  key={list.id}>
                                <td>{list.identifier}</td>

                                <td id="container">{list.password}
                                </td>

                                <Box onClick={handleHidePassword}  id="action-btn" >
                                    <img src={visibilityBlack} alt="Ocultar" />
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
                
            <button type="button" onClick={handleOpenNewPasswordModal}> 
                Register new
            </button>

        </Container>
    
        
    );
}