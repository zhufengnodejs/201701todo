import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
export default class TodoApp extends React.Component{
    render(){
        return (
            <div className="container" style={{marginTop:20}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader/>
                            </div>
                            <div className="panel-body">

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