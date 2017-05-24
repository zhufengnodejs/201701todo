import React from 'react';
import * as FilterTypes from './filter-types';
export default class TodoFooter extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-3 text-center">
                    <a href="#" style={{textDecoration:'none'}}>你有 <span className="badge">{this.props.activeTodoCount}</span>件待办</a>
                </div>
                <div className="col-xs-6 text-center">
                    <button className={`btn ${this.props.filterType == FilterTypes.ALL?'btn-success':'btn-default'} btn-sm`} onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}>全部</button>
                    <button style={{marginLeft:10}} className={`btn ${this.props.filterType == FilterTypes.ACTIVE?'btn-success':'btn-default'} btn-sm`}  onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)}>未完成</button>
                    <button style={{marginLeft:10}} className={`btn ${this.props.filterType == FilterTypes.COMPLETED?'btn-success':'btn-default'} btn-sm`}  onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-xs-3 text-center">

                </div>
            </div>
        )
    }
}