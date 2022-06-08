import logo from './logo.svg';
import './App.css';
import './Pages/FirstPage/firstPage.css'
import './Pages/MainPage/mainPage.css'
import FirstPage from './Pages/FirstPage';
import MainPage from './Pages/MainPage';
import { useState } from 'react';

function App() {

  //estados
  const [isLogin,setIsLogin] = useState(false)
  const [listTransactions, setListTransactions] = useState([])

  //Funcoes para ir para a Main Page e Voltar
  function LogIn(){
    setIsLogin(true)
  }
  function LogOut(){
    setIsLogin(false)
  }

  //Funcoes para adicionar e remover transacoes
  function addTransacao(descricao,tipo,preco){
      const obj = {
        description: `${descricao}`,
        type: `${tipo}`,
        value: parseInt(preco)
      }

      setListTransactions(listTransactions.concat(obj))
     
  }
  function removeTransacao(value){

    const newArr = listTransactions.filter((element)=>{
      console.log(element)
      return element.description !=value
    })

    setListTransactions(newArr)
  }
  
  

  return (
    <div className="App">
      {isLogin?
          <MainPage lista ={listTransactions} add = {addTransacao} remove = {removeTransacao} logOut={LogOut}/>
        :
          <FirstPage LogIn={LogIn}/>
      }
      
    </div>
  );
}

export default App;
