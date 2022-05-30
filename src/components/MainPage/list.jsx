import NoCard from "./NoCard.png"
import  Card from "./card"

function List({lista,remove}){
    return(
        <div className="divList">
            <nav className="headerList">
                <span>Resumo financeiro</span>
                <ul>
                    <li>
                        <button type="button" autoFocus>Todos</button>
                    </li>
                    <li>
                        <button>Entrada</button>
                    </li>
                    <li>
                        <button>Despesas</button>
                    </li>
                </ul>
            </nav>
            <ul>
                {
                    lista.length==0?(
                        <section className="NoCard">
                            <img src={NoCard} alt="" />
                            <img src={NoCard} alt="" />
                            <img src={NoCard} alt="" />
                        </section>
                    ):(
                        lista.map((element,index)=>(
                           <li key={index}> <Card descricao={element.description} preco={element.value} tipo={element.type} remove={remove}/> </li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default List