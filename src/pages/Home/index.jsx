import { useRef } from "react";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInput,
  Input,
  InputLabel,
 
  
  
} from "./styles";

import  Button  from "../../components/Button";
import TopBackground from "../../components/TopBackground";




function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });
    console.log(data);
  }
    

  return (
    <Container>
      
      <TopBackground />
      

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInput>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>
          <br/>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInput>

        <div style={{width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>
      <Button type="button">Ver Lista de Usuários</Button>
    </Container>
    
  );
}

export default Home;

/*
 Exportar "Padrão" -> Uma coisa só por pagina
 Quando precisar Exportar mais de uma coisa = expert, antes da function */
