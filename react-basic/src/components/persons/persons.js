
import React, { Component } from 'react';
import Person from './person/person'


// 无状态组件：没有组件生命周期，有状态组件有生命周期
class Persons extends Component{
    //es6
    constructor(props){
        super(props); //constructor要写super 不然会报错
        console.log(props)
        console.log('[Persons] constructor is running')
    }
  

    componentWillMount(){
        console.log('[Persons] componentWillMount is running')
    }

    componentDidMount(){  //内容已经渲染
        console.log('[Persons] componentDidMount is running')
    }

    //更新组件生命周期钩子函数
    componentWillReceiveProps(nextProps){
        console.log('[Persons] componentWillReceiveProps is running',nextProps)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons] shouldComponentUpdate is running',nextProps,nextState)
        // return false;         //return false 下面的代码不会执行，return true会继续执行
        return nextProps.persons !== this.props.persons;
    
    }


    componentWillUpdate(nextProps,nextState){
        console.log('[Persons] componentWillUpdate is running',nextProps,nextState)
    }
    render(){
        return this.props.persons.map((person,index) =>{
            return <Person
            mychange={(event)=>this.props.mychange(event,person.id)}
            myclick={()=> this.props.myclick(index)}
            key={person.id}
            name={person.name}
            count={person.count}
            />
        })
    }
} 


export default Persons



