import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class NewSuper extends Component{
    constructor(props){
        super(props)
        this.state = {
            form:{
                name: '',
                age: '',
                enjoys: '',
            }
        }
    }

    handleClick = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    onClick = (event) =>{
      event.preventDefault()
      let { form } =this.state
      this.props.newSuper(this.state.form)
    }

    render(){
        return(
            <div>
    <Form>
      <Form.Group controlId="formBasicEmail" >
        <Form.Label>Superhero Name</Form.Label>
        <Form.Control
        name="name"
        type="text"
        placeholder="Enter your Superhero name"
        onChange={this.handleClick}
        value={this.state.form.name}
        />
        <Form.Text className="">
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Superhero Age</Form.Label>
        <Form.Control
        name="age"
        type="text"
        placeholder="Enter your Superhero age"
        onChange={this.handleClick}
        value={this.state.form.age}
        />
        <Form.Text className="text-muted">
        </Form.Text>

      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Enjoys</Form.Label>
        <Form.Control
        name="enjoys"
        type="text"
        placeholder="Enter your Superhero age"
        onChange={this.handleClick}
        value={this.state.form.enjoys}
        />
      </Form.Group>


      <Button variant="primary" type="submit" onClick={this.onClick}>
      Submit
      </Button>

      </Form>



            </div>
        )
    }
}
