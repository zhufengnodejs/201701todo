import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';
import TodoModel from './TodoModel';
let model = new TodoModel();
function render(){
    ReactDOM.render(<TodoApp model={model}/>,document.querySelector('#root'));
}
model.subscribe(render);
render();

