import React from 'react';
import './App.css';
import { BrowserRouter as Router,
         Switch,
         Route} from 'react-router-dom';
import SuperHeroes from './pages/Superheroes';
import NewSuper from './pages/NewSuper';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { getSuperhero, createSuperhero, deleteSuperhero } from './api'
import banner from './images/superherobanner.jpg'
import Image from 'react-bootstrap/Image'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            success: false,
            superheroes: []
        }
    }
    componentDidMount() {
      getSuperhero()
       .then(APIsuperheros => {
         this.setState({
             superheroes: APIsuperheros
         })
       })
    }

    handleNewSuperhero =(newSuperheroInfo)=>{
        createSuperhero(newSuperheroInfo)
        .then(successSuperhero => {
            this.setState({
                success: true
            })
            getSuperhero()
            .then(successSuperhero =>{
                this.setState({
                    superheroes: successSuperhero
                })
            })
            console.log("SUCCESS! New superhero: ", successSuperhero);
        })
    }

    deleteNewSuperhero = (delSuperheroInfo)=>{
        deleteSuperhero(delSuperheroInfo)
        .then(deleteSuper => {
            console.log(deleteSuper)
            this.setState({superheroes: deleteSuper})
        })
    }

    handleNewSuper = (form) =>{
        console.log(form);
    }

    render(){
        return(
            <div>
                <Nav className="justify-content-center bg-secondary" >
                    <Nav.Item>
                        <Nav.Link href="/pages/Superheroes">Super Heroes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/pages/NewSuper">New Super Heroes</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Image src={banner}>
                </Image>
                <Router>
                    <Switch>
                        <Route exact path="/pages/Superheroes" render={(props)=> <SuperHeroes
                         delSuper={this.deleteNewSuperhero}
                         superheroes={this.state.superheroes}/> } />
                        <Route exact path='/pages/NewSuper' render={(props) => <NewSuper
                        newSuper={this.handleNewSuperhero} success={this.state.success}/> } />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App;
