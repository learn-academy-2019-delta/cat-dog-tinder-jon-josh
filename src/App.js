import React from 'react';
import './App.css';
import { BrowserRouter as Router,
         Switch,
         Route} from 'react-router-dom';
import SuperHeroes from './pages/Superheroes';
import NewSuper from './pages/NewSuper';
import Nav from 'react-bootstrap/Nav'
import flash from './images/flash.jpg';
import wolverine from './images/wolverine.png';
import wonder from './images/wonder.jpg';
class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            superheroes: [
                {id: 1,
                img: flash,
                name: "Flash",
                age: 24,
                enjoys: "Quick strolls around the world."
            },
            {   id: 2,
                img: wolverine,
                name: "Wolverine",
                age: 82,
                enjoys: "Getting drunk.",
            },
            {   id: 3,
                img: wonder,
                name: "Wonder Woman",
                age: 99,
                enjoys: "Flying her invisible jet."
            },
            ]
        }
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
                <Router>
                    <Switch>
                        <Route exact path="/pages/Superheroes" render={(props)=> <SuperHeroes superheroes={this.state.superheroes}/> } />
                        <Route exact path='/pages/NewSuper' render={(props) => <NewSuper
                        newSuper={this.handleNewSuper}/> } />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App;
