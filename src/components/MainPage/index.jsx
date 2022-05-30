import Header from './header'
import Form from './form'
import List from './list'
import './mainPage.css'

function MainPage({lista,add,remove,logOut}){
    return(
        <div className = "divMainPage">
            <Header logOut={logOut}/>
            <section className = "body">
                <Form add={add}/>
                <List lista ={lista} remove={remove}/>
            </section>
        </div>
    )
}

export default MainPage