import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

export default class SuperHeroes extends Component{
    render(){

        return(
            <div>

            {this.props.superheroes.map((superheroes, index)=>{
            return (
            <Card style={{ width: '12rem' }}>

              <Card.Img variant="top" src={superheroes.img} />
              <Card.Body>
                <Card.Title>{superheroes.name}</Card.Title>
                <Card.Text>
                  Age: {superheroes.age} || Enjoys: {superheroes.enjoys}
                </Card.Text>
              </Card.Body>
            </Card>
        )
       })}
            </div>
        )
    }
}
