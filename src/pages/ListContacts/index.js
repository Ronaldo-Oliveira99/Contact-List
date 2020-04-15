import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader } from "../../components/Card";
import ContactList from "../../components/ContactList";
import { Button, Text } from "../../components/Buttons";
import NoContacts from "../../components/NoContacts";

const ListContacts = () => {
  const contact = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  const totalContacts = contact.length;

  const RemoverDaLista = contact => {
    dispatch({ type: "DELETE_USER", contact });
  };

  return (
    <Card>
      <CardHeader>
        <Text data-test={`total-${totalContacts}`}>
          Contatos({totalContacts})
        </Text>

        <Link data-test="novo-contato" to="/create" as="button">
          <Button>Adicionar Contato</Button>
        </Link>
      </CardHeader>
      {totalContacts ? (
        contact.map((item, index) => (
          <div key={index}>
            <ContactList
              nome={item.nome}
              email={item.email}
              id_contact={item.id}
              RemoverDaLista={() => RemoverDaLista(item)}
            />
          </div>
        ))
      ) : (
        <NoContacts data-test="sem-contatos" />
      )}
    </Card>
  );
};

export default ListContacts;
