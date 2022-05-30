import Logo from './imagem'
import Text from './text'
import './firstPage.css'

function FirstPage({LogIn}){
    return(
        <div className = "App">
            <Text LogIn={LogIn}/>
            <Logo/>
        </div>
       
    )
}

export default FirstPage