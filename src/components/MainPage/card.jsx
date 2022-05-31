import Lixeira from './trash.png'

function Card({descricao,preco,tipo, remove}){
    return(
        <div className="card">
            <section>
                <span className="desc">{descricao}</span>
                <span>{tipo}</span>
            </section>
            <span>R${preco},00</span>
            <button onClick={()=>{remove(descricao)}}><img src={Lixeira}/></button>
        </div>
    )
}

export default Card