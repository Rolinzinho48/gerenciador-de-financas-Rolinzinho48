import Logo from './logo.png'

function Text({LogIn}){
    return(
        <div className = "divText">
            <img src={Logo} alt="" />
            <h1>Centralize o controle das suas finanças</h1>
            <span>de forma rápida e segura<br></br></span>
            <button className="btnIniciar" onClick={LogIn}>Iniciar</button>
        </div>
        
    )
}

export default Text