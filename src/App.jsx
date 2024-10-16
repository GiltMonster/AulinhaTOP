import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/header/header'

export default function App() {

  // useState é um hook que permite adicionar e manipular estados em componente
  const [user, setUser] = useState({}); //Inicializa o estado do "user" como um objeto vazio

  // useEffect é um hook que executa uma função quando o 
  // componente é renderizado ou 
  // certa condição é atendida(como o valor de um useState mudar)
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    // Utilizando a API randomuser com o fetch
    fetch('https://randomuser.me/api/')
      .then((response) => response.json()) // Transforma a resposta em JSON
      .then((data) => {
        // Utiliza os dados
        setUser(data.results[0]);
        console.log(data.results[0]);

      })
  }

  return (
    <main>
      <Header />
      <div className='container'>

        <h1>Usuário</h1>

        <div className='user-container'>

          <img src={user.picture?.large} alt="Imagem de alguém desconhecido" />

          <div className='user-info-container'>
            <h1>{`${user.name?.first} ${user.name?.last}`}</h1>
            <hr />
            <div className='user-info-content'>
              <p><span>Email:</span> {`${user.email}`}</p>
              <p><span>Telefone:</span> {`${user.phone}`}</p>
              <p><span>Gênero:</span> <span className={user.gender === "female" ? 'female': 'male'}>{`${user.gender}`}</span></p>
              <p><span>Idade: </span>{`${user.dob?.age}`}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


