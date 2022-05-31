import {useState} from 'react'
import ValorTotal from './valorTotal'

function Form({add}){

    const [descricao,setDescricao]  = useState()
    const [tipo, setTipo]           = useState()
    const [preco, setPreco]         = useState()
    const [precoTotal,setPrecoTotal]= useState(0)

    function handleAdd(){   
        add(descricao,tipo,preco)
        somarValor(preco,tipo)
    }

    function somarValor(cont,sinal){
       if(sinal =="Entrada"){
           setPrecoTotal(precoTotal+parseInt(cont))
       }else{
        setPrecoTotal(precoTotal-cont)
       }
    }

    return(
        <div className = "divForm">
            <form className="form" onSubmit={(event)=>{handleAdd(event.preventDefault()); event.target.reset()}}>
                <label>Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" onChange={(event)=>{setDescricao(event.target.value)}}/>
                <span>Ex:Compra de roupas</span>
                <div>
                    <section>
                        <label >Valor</label>
                        <input type="number" placeholder="Valor" onChange={(event)=>{setPreco(event.target.value)}}/>
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