import Lixeira from './trash.png'

function Card({descricao,preco,tipo, remove}){
    return(
        <div>
            <section>
                <span>{descricao}</span>
                <span>{tipo}</span>
            </section>
            <span>{preco}</span>
            <button onClick={()=>{remove(descricao)}}><img src={Lixeira}/></button>
        </div>
    )
}

export default Card