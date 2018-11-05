import React, { Component } from 'react';
import { Form, FormGroup, Label, FormControl, Button } from 'react-bootstrap'
import { connect } from 'tls';
import { fetchTodos } from '../actions/todoActions';

@connect((store) => {
    return {
        todos: store.todos
    }
})
export default class Todo extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(fetchTodos())
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

                <h3><center>List Todos</center></h3><br/>
                {
                    this.props.todos.map((todo) => {
                        return todo
                    })
                }
            </div>
        )
    }
}