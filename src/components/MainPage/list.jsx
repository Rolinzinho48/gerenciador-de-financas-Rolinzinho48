import NoCard from "./NoCard.png"
import Card from "./card"

import {useState} from "react"

function List({lista,remove}){

   
    const [newList,setNewList] = useState(lista)
    const [precoTotal,setPrecoTotal] = useState(0)

    function filtro(value){
        const arr = lista.filter((element)=>{
            return element.type===value
        })

        setNewList(arr)
    }

    

    return(
        <div className="divList">
            <nav className="headerList">
                <span>Resumo financeiro</span>
                <ul>
                    <li>
                        <button type="button" autoFocus onClick={()=>{setNewList(lista)}}>Todos</button>
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
                    
                    lista.length==0?(
                        
                        <section className="NoCard">
                            <h2>Você não possui nenhum lançamento</h2>
                            <img src={NoCard} alt="" />
                            <img src={NoCard} alt="" />
                            <img src={NoCard} alt="" />
                           
                        </section>
                    ):(
                        newList.map((element,index)=>(
                            <li key={index}> <Card descricao={element.description} preco={element.value} tipo={element.type} remove={remove} renderizar={filtro}/> </li>          
                        ))
                        
                    )
                }
            </ul>
        </div>
    )
}

export default List