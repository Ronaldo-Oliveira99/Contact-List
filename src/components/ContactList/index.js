import React from "react";
import styled from "styled-components";
import { Button, ButtonsArea } from "../Buttons/index";
import { Link } from "react-router-dom";

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: #e8f0f7;
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: blue;
`;

// export const Button = styled.button`
//   background-color: burlywood;
// `;

const ContactList = ({ nome, email, id_contact, RemoverDaLista }) => (
  <ListContainer>
    <div>
      <Text>{nome}</Text>
      <Text>{email}</Text>
    </div>

    <ButtonsArea>
      <Link data-test="editar" to={`/${id_contact}/edit`}>
        <Button>Editar </Button>
      </Link>
      <Button data-test="apagar" onClick={RemoverDaLista}>
        Apagar
      </Button>
    </ButtonsArea>
  </ListContainer>
);
export default ContactList;
