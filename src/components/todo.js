import React, { Component } from 'react';
import { Form, FormGroup, Label, FormControl } from 'react-bootstrap'
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
                    </FormGroup>
                </Form>
            </div>
        )
    }
}