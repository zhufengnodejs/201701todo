import React from 'react';
import * as FilterTypes from './filter-types';
export default class TodoFooter extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-4 text-center">
                    {
                        this.props.activeTodoCount>0?
                            <div style={{height:'30px',lineHeight:'30px'}}>
                                <button className="btn btn-primary btn-sm"  >你有 <span className="badge">{this.props.activeTodoCount}</span>件待办事项</button>
                            </div>:null
                    }
                </div>
                <div className="col-xs-6 text-center">
                    <button className={`btn ${this.props.filterType === FilterTypes.ALL?'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}>全部</button>
                    <button style={{marginLeft:10}} className={`btn ${this.props.filterType === FilterTypes.ACTIVE?'btn-success':'btn-default'} btn-sm`}  onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)}>未完成</button>
                    <button style={{marginLeft:10}} className={`btn ${this.props.filterType === FilterTypes.COMPLETED?'btn-success':'btn-default'} btn-sm`}  onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-xs-2 text-center">
                    {
                        this.props.completedTodoCount>0?<button className="btn btn-danger btn-sm" onClick={this.props.clearCompleted}>删除已完成</button>:null
                    }

                </div>
            </div>
        )
    }
}