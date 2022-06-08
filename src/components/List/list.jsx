import NoCard from "../../Assets/NoCard.png"
import Card from "../Card/card"

import {useState,useEffect} from "react"

function List({lista,remove}){

   
    const [newList,setNewList] = useState(lista)
   

    useEffect(()=>{
        filtro("Todos")
    },[lista])

    function filtro(value){

        if(value!=="Todos"){
            const arr = lista.filter((element)=>{
                return element.type===value
            })

            setNewList(arr)
        }
        else{
            setNewList(lista)
        }

    }

    

    return(
        <div className="divList">
            <nav className="headerList">
                <span>Resumo financeiro</span>
                <ul>
                    <li>
                        <button type="button" autoFocus onClick={()=>{filtro("Todos")}}>Todos</button>
                    </li>
                    <li>
                        <button onClick={()=>filtro("Entrada")}>Entrada</button>
                    </li>
                    <li>
                        <button onClick={()=>filtro("Despesa")}>Despesa</button>
                    </li>
                </ul>
            </nav>
            <ul>
                {
                    
                    lista.length===0?
                        
                        <section className="NoCard">
                            <h2>Você não possui nenhum lançamento</h2>
                            <img src={NoCard} alt="" />
                            <img src={NoCard} alt="" />
                            <img src={NoCard} alt="" />
                           
                        </section>
                    :
                        newList.map((element,index)=>(
                            <li key={index}> <Card classe={"card " +element.type} descricao={element.description} preco={element.value} tipo={element.type} remove={remove} renderizar={filtro}/> </li>          
                        ))
                        
                    
                }
            </ul>
        </div>
    )
}

export default List