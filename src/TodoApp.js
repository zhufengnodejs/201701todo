import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import * as filterTypes from './filter-types';
export default class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterType:filterTypes.ALL
        };//初始化默认状态
    }
    toggle = (id)=>{
        let todos = this.state.todos;
        todos = todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({todos});
    }

    remove = (id)=>{
        let todos = this.state.todos;
        let index = todos.findIndex(todo=>todo.id === id);
        todos.splice(index,1);
        this.setState({todos});
    }
    toggleAll = (event)=>{
        let checked = event.target.checked;
        let todos = this.state.todos;
        todos = todos.map(todo=>{
            todo.completed = checked;
            return todo;
        })
        this.setState({todos});
    }
    changeFilterType=(filterType)=>{
        this.setState({filterType});
    }
    clearCompleted = ()=>{
        let todos = this.state.todos;
        todos = todos.filter(todo=>!todo.completed);
        this.setState({todos});
    }
    render() {
        let todos = this.props.model.todos;
        let activeTodoCount = todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
        let completedTodoCount = todos.length - activeTodoCount;
        let showTodos = todos.filter((todo)=>{
            switch (this.state.filterType){
                case filterTypes.ACTIVE://要显示未完成的
                    return !todo.completed;
                case filterTypes.COMPLETED://完成的
                    return todo.completed;
                default:
                    return true;
            }
        })
        let main = (
            <ul className="list-group">
                {
                    todos.length>0? <li className="list-group-item">
                        <input type="checkbox" checked={activeTodoCount===0} onChange={this.toggleAll}/>{activeTodoCount===0?'全部取消':'全部选中'}
                    </li>:null
                }

                {
                    showTodos.map((todo,index)=><TodoItem
              toggle={this.toggle}
              key={index}
              todo={todo}
              remove={this.remove}
          ></TodoItem>)
                }
            </ul>
        )
        return (
            <div className="container" style={{marginTop: 20}}>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.props.model.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">
                                <TodoFooter
                                    activeTodoCount={activeTodoCount}
 changeFilterType ={this.changeFilterType}
 filterType = {this.state.filterType}
 clearCompleted = {this.clearCompleted}
 completedTodoCount = {completedTodoCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}