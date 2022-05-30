import {useState} from 'react'

function Form({add}){

    const [descricao,setDescricao]  = useState()
    const [tipo, setTipo]           = useState()
    const [preco, setPreco]         = useState()

    function handleAdd(){
        
        add(descricao,tipo,preco)
    }

    return(
        <>
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
                            <option>Entrada</option>
                            <option>Despesa</option>
                        </select>
                    </section>
                </div>
                <input type="submit" value ="Inserir Valor" />
            </form>
        </>
    )
}

export default Form