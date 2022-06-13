import {useEffect, useState} from 'react'
import ValorTotal from '../ValorTotal/valorTotal'

function Form({add,lista}){

    const [descricao,setDescricao]  = useState()
    const [tipo, setTipo]           = useState("Entrada")
    const [preco, setPreco]         = useState()
    const [precoTotal,setPrecoTotal]= useState(0)
    const [valorEntrada,setValorEntrada]= useState(0)
    const [valorSaida,setValorSaida]= useState(0)

    function handleAdd(){   
        add(descricao,tipo,preco)
        
    }

    useEffect(()=>{
        const entrada = lista.filter((value)=>{
            return value.type==="Entrada"
        })
        const totalEntrada = entrada.map((value)=>{
            return value.value
        })

        const saida = lista.filter((value)=>{
            return value.type==="Despesa"
        })
        const totalSaida = saida.map((value)=>{
            return value.value
        })


        setValorEntrada(totalEntrada)
        setValorSaida(totalSaida)
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
            <ValorTotal entrada={valorEntrada} saida ={valorSaida}/>
        </div>
        
    )
}

export default Form