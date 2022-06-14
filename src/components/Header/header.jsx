import logo from '../../Assets/logo.png'

function Header({logOut}){
    return(
        <>
            <nav className="header">
                <img src={logo} onClick={logOut} alt="" />
                <button onClick={logOut}>Inicio</button>
            </nav>
        </>
    )
}

export default Header