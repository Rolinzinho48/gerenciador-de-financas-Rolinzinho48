import Header from '../../components/Header/header'
import Form from '../../components/Form/form'
import List from '../../components/List/list'
import './mainPage.css'

function MainPage({lista,add,remove,logOut}){
    return(
        <div className = "divMainPage">
            <Header logOut={logOut}/>
            <section className = "body">
                <Form add={add} lista={lista}/>
                <List lista ={lista} remove={remove}/>
            </section>
        </div>
    )
}

export default MainPage