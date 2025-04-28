import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash.svg";
import { Container, ContainerUser, CardUsers, TrashIcon, Title, AvatarUser } from "./styles";


function ListUsers(){
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
   
    useEffect(() => {
        async function getUsers(){
       const {data} = await api.get('/usuarios')
       
       setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)
        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }

    // Toda vez que a tela carregar, o useEffect é executado.
    // toda vez que uma  derteminada variavel MUDA de valor, Ele é executado.
   

    return(
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUser>
            {users.map((user) => (
                <CardUsers  key={user.id}>
                    <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} alt="avatar" />
                <div>
                    <h3>Nome: {user.name}</h3>
                    <p>Idade: {user.age}</p>
                    <p>E-mail: {user.email}</p>
                    
                </div>
                <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)}/> 
                </CardUsers>
            ))}
            </ContainerUser>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
            
        </Container>
    )

}
export default ListUsers