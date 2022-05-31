import logo from './logo.svg';
import './App.css';
import './components/FirstPage/firstPage.css'
import './components/MainPage/mainPage.css'
import FirstPage from './components/FirstPage';
import MainPage from './components/MainPage';
import { useState } from 'react';

function App() {

  const [isLogin,setIsLogin] = useState(false)
  const [listTransactions, setListTransactions] = useState([
    {description:"SLASLA", type:"sla",value:12},
    {description:"SLASLA", type:"sla",value:12}
  ])


  function LogIn(){
    setIsLogin(true)
  }
  function LogOut(){
    setIsLogin(false)
  }
  function addTransacao(descricao,tipo,preco){
      const obj = {
        description: `${descricao}`,
        type: `${tipo}`,
        value:`${preco}`
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
      {isLogin?(
          <MainPage lista ={listTransactions} add = {addTransacao} remove = {removeTransacao} logOut={LogOut}/>
        ):(
          <FirstPage LogIn={LogIn}/>
        )
      }
      
    </div>
  );
}

export default App;
