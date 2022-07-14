import { useState } from "react";
import hide from '../../assets/visibilityBlack.svg';
import show from '../../assets/visibilityOffBlack.svg';
import { List } from "../../ListContext";
import { Box } from "../List/styles";

interface PasswordPros {
  list: List;
}


export function Password({list}: PasswordPros) {
  const [hidePassword, setHidePassword] = useState(false);
  
  function ocultPassword() {
    setHidePassword((atual) => atual ? false : true)
  }
  
  return(
    <tr>
      <td>{list.identifier}</td>

      {hidePassword && (
        <td id={String(list.id)} className="teste">
          {list.password}
        </td>
      )}      

      <Box
        onClick={() => {
          ocultPassword();
        }}
      >
        {hidePassword ? (
          <img id="img" src={hide} alt="Ocultar" />
        ) : (
          <img id="img" src={show} alt="Ocultar" />
        )}
      </Box>
    </tr>
  );
}