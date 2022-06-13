import logo from '../../Assets/logo.png'

function Header({logOut}){
    return(
        <>
            <nav className="header">
                <img src={logo} alt="" />
                <button onClick={logOut}>Inicio</button>
            </nav>
        </>
    )
}

export default Header