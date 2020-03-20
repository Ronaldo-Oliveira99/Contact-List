import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

function NoContacts() {
  return (
    <Container data-test="sem-contatos">
      Você não tem contatos cadastrados
    </Container>
  );
}

export default NoContacts;
