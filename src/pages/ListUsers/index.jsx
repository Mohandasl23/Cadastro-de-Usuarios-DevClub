import { useEffect, useState } from "react";
import api from "../../services/api";
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/TopBackground";

function ListUsers(){
    const [users, setUsers] = useState([])
   
    useEffect(() => {
        async function getUsers(){
       const {data} = await api.get('/usuarios')
       
       setUsers(data)
        }
        getUsers()
    }, [])

    // Toda vez que a tela carregar, o useEffect é executado.
    // toda vez que uma  derteminada variavel MUDA de valor, Ele é executado.
   

    return(
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Nome: {user.name}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Idade: {user.age}</p>
                </div>
            ))}
            <Button>Voltar</Button>
            
        </div>
    )

}
export default ListUsers