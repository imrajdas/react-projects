import React, { Component } from 'react';
import { Form, FormGroup, Label, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';

@connect((store) => {
    return {
        state: store.todoReducer
    }
})
export default class Todo extends Component {


    componentWillMount() {
        this.props.dispatch(fetchTodos())
    }
    render(){
        console.log(this.props)
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
                <div>
                    {this.props.state.todos.map((todo) => {
                        return todo
                    })}
                </div>
            </div>
        )
    }
}