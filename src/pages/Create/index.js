import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Card, CardHeader } from "../../components/Card";
import { Input, Label, FormContent, InputErro } from "../../components/Inputs";
import { Button, ButtonsArea, Text } from "../../components/Buttons";

function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { contato_id } = useParams();
  const id = parseInt(contato_id, 10);
  const contact = useSelector(
    store => store.contacts.find(contact => contact.id === id) || {}
  );

  const [nome, setNome] = useState(contact.nome || "");
  const [email, setEmail] = useState(contact.email || "");
  const [nouser, setNouser] = useState(false);
  const [noemail, setNoemail] = useState(false);

  const redirectHome = () => {
    history.push("/");
  };

  const hadleChangeUser = e => {
    setNouser(false);
    setNome(e.target.value);
  };

  const hadleChangeEmail = e => {
    setNoemail(false);
    setEmail(e.target.value);
  };

  const CriarSalvarContato = () => {
    if (!nome) {
      setNouser(true);
      return;
    }
    if (!email || !email.includes("@")) {
      setNoemail(true);
      return;
    }
    if (id) {
      dispatch({ type: "EDIT_USER", payload: { nome, email, id } });
    } else {
      dispatch({ type: "GET_USER", payload: { nome, email } });
    }
    redirectHome();
  };

  if (id && !nome) {
    return <Redirect to="/404" />;
  }

  return (
    <Card>
      <CardHeader>
        <Text>{id ? "Salvar" : "Criar"} Contato</Text>
        <ButtonsArea>
          <Button onClick={redirectHome}>Voltar</Button>
          <Button
            data-test={id ? "salvar" : "criar"}
            onClick={CriarSalvarContato}
          >
            {id ? "Salvar" : "Criar"} Contato
          </Button>
        </ButtonsArea>
      </CardHeader>
      <FormContent>
        <Label htlmFor="usuario">Nome</Label>
        <Input
          data-test="nome"
          type="text"
          name="usuario"
          value={nome}
          onChange={hadleChangeUser}
        />
        {nouser && <InputErro>Campo não preenchido ou inválido.</InputErro>}
      </FormContent>
      <FormContent>
        <Label htlmFor="email">Email</Label>
        <Input
          data-test="email"
          type="text"
          name="email"
          value={email}
          onChange={hadleChangeEmail}
        />
        {noemail && <InputErro>Campo não preenchido ou inválido.</InputErro>}
      </FormContent>
    </Card>
  );
}

export default Create;
