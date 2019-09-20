import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default class SuperHeroes extends Component{

    handleDel = (id) =>{
        this.props.delSuper(id)
    }

    render(){
        return(
            <div>
            <Row >
            {this.props.superheroes.map((superheroes, index)=>{
            return (
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={superheroes.img} />
              <Card.Body>
                <Card.Title class="text-red">{superheroes.name}</Card.Title>
                <Card.Text class="text-blue">
                  Age: {superheroes.age} || Enjoys: {superheroes.enjoys}
                </Card.Text>
              </Card.Body>
              <button onClick={()=>this.handleDel(superheroes.id)}>Delete</button>
            </Card>
        )
       })}
       </Row>
            </div>
        )
    }
}
