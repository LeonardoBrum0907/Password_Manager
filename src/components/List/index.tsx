import { Box, Content, Container } from "./styles";
import  visibilityBlack  from "../../assets/visibilityBlack.svg";
import visibilityOffBlack from "../../assets/visibilityOffBlack.svg";
import { NewPasswordModal } from "../NewPasswordModal";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface List {
    id: number;
    identifier: string;
    password: string
}


export function List() {  
    const [lists, setLists] = useState<List[]>([]);

    useEffect(() => {
        api.get('/list')
            .then(response => setLists(response.data.lists))
    }, []);


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
            {lists.map(list => (
                <table> 

                    <tbody>
                            <tr  key={list.id}>
                                <td>{list.identifier}</td>

                                <td typeof="password" >{list.password}</td>

                                <Box>
                                    <img src={visibilityBlack} alt="Ocultar" />
                                </Box>
                            </tr>
                    </tbody>

                </table> 
            ))}


                
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