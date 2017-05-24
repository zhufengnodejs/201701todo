import React from 'react';
export default class TodoItem extends React.Component{
    render(){
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-md-10">
                        今天好好学习React
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger btn-xs">X</button>
                    </div>
                </div>
            </li>
        )
    }
}