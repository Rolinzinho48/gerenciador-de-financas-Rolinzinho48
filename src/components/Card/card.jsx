import Lixeira from '../../Assets/trash.png'

function Card({classe,descricao,preco,tipo, remove,renderizar}){
    return(
        <div className={classe}>
            <section>
                <span className="desc">{descricao}</span>
                <span>{tipo}</span>
            </section>
            <span>R${Math.abs(preco)},00</span>
            <button onClick={()=>{remove(descricao);renderizar(tipo)}}><img src={Lixeira}/></button>
        </div>
    )
}

export default Card