import React, { Component } from 'react';
import { Form, FormGroup, Label, FormControl, Button } from 'react-bootstrap'
export default class Todo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="container">
                <h1><center>Todo App</center></h1><br/>
                
                <Form>
                    <FormGroup>
                        <Label>TODO:</Label><br/>
                        <FormControl type="text" placeholder="Enter your todos"/>
                        <Button type="submit" className="btn btn-primary">ADD</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}