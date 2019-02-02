
//有状态组价的写法

import React, { Component } from 'react';
import './person.css'
class person extends Component{
    //es6
    constructor(props){
        super(props); //constructor要写super 不然会报错
        console.log(props)
        console.log('[Person] constructor is running')
    }
  

    componentWillMount(){
        console.log('[Person] componentWillMount is running')
    }

    componentDidMount(){  //内容已经渲染
        console.log('[Person] componentDidMount is running')
    }
    render(){
        return (
            <div >
                <p  onClick={this.props.myclick}>大家好我是{this.props.name},我有{this.props.count}</p>
                <p className='person'>{this.props.children}</p>
                <input type="text" onChange={this.props.mychange} defaultValue={this.props.name}/>
            </div>
        )
    }
    
}

export default person





