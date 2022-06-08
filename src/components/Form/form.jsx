import {useEffect, useState} from 'react'
import ValorTotal from '../ValorTotal/valorTotal'

function Form({add,lista}){

    const [descricao,setDescricao]  = useState()
    const [tipo, setTipo]           = useState("Entrada")
    const [preco, setPreco]         = useState()
    const [precoTotal,setPrecoTotal]= useState(0)

    function handleAdd(){   
        add(descricao,tipo,preco)
        
    }

    useEffect(()=>{
        const soma = lista.reduce((acc,cur)=>{
            //se for despesa, multipla por -1
            cur.type==="Despesa"?cur.value=cur.value*-1:cur.value=cur.value
            return acc+cur.value
           },0)
        
        setPrecoTotal(soma)

    },[lista])

    

    return(
        <div className = "divForm">
            <form className="form" onSubmit={(event)=>{handleAdd(event.preventDefault()); event.target.reset();setTipo("Entrada")}}>
                <label>Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" onChange={(event)=>{setDescricao(event.target.value)}}/>
                <span>Ex:Compra de roupas</span>
                <div>
                    <section>
                        <label >Valor</label>
                        <input min="0" type="number" placeholder="Valor" onChange={(event)=>{setPreco(event.target.value)}}/>
                    </section>
                    <section>
                        <label>Tipo de Valor</label>
                        <select  onChange={(event)=>{setTipo(event.target.value)}}>
                            <option value ="Entrada" >Entrada</option>
                            <option value ="Despesa" >Despesa</option>
                        </select>
                    </section>
                </div>
                <input  type="submit" value ="Inserir Valor" />
            </form>
            <ValorTotal valorTotal={precoTotal}/>
        </div>
        
    )
}

export default Form