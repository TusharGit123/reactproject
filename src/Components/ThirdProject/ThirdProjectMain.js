import React, { Component } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export class ThirdProjectMain extends Component {
    render() {
        return (
            <div>
               <TodoInput/>
               <TodoList/>
            </div>
        )
    }
}

export default ThirdProjectMain
