import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
export default class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {todos:[]};//初始化默认状态
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
    addTodo = (todo)=>{
        todo = Object.assign({},{id:Math.random(),completed:false},todo);
       let todos = this.state.todos;
       todos.push(todo);
       this.setState({todos});
    }
    remove = (id)=>{
        let todos = this.state.todos;
        let index = todos.findIndex(todo=>todo.id === id);
        todos.splice(index,1);
        this.setState({todos});
    }
    render() {
        let main = (
            <ul className="list-group">
                {
                    this.state.todos.map((todo,index)=><TodoItem
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
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}