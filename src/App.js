import React, { Component } from 'react';
import './App.css';
// 引用自己的文件要加./
import Person from './person/person'   

class App extends Component {
  //state 用于改变组件内容状态的值（动态）
  //props 用于组件通信进行传值
  state = {
    persons:[
      {name:'蒙蒙',count:2},
      {name:'花花',count:3},
      {name:'hua2',count:4},
    ],
    isShow:false
  }
  changeHangler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    // this.setState({  
    //   persons:[
    //     {name:event.target.value,count:2},
    //     {name:'花花',count:3},
    //     {name:'hua2',count:4},
    //   ]
    // })
  }
  clickHangler = (newName) =>{
    // console.log("饿哦的点击")
    // this.state.persons[0].name = "是的"   不能这么写
    //更改状态要用
    this.setState({  
      persons:[
        {name:newName,count:2,id:1},
        {name:'花花',count:3,id:2},
        {name:'hua2',count:4,id:3},
      ]
    })
  }
  deleteHangler = (personIndex) =>{
    const persons = this.state.persons
    persons.splice(personIndex,1)
    this.setState({
      persons: persons
    })
  }
  toGgle = () =>{
    const doshow = this.state.isShow;
    this.setState({
      isShow:!doshow
    })
  }
  render() {
    const style ={
      backgroundColor: 'white',
      boder:'1px solid blue'
    }
    let person = null;
    if(this.state.isShow){
      person = (
        <div>
          {/* 用for 循环渲染 */}
          {
            this.state.persons.map((person,index) =>{
              return <Person mychange={(event)=>this.changeHangler(event,person.id)} myclick={()=> this.deleteHangler(index)}  key={index} name={person.name} count={person.count}/>
            })
          }
            {/* <Person
            mychange={this.changeHangler}
            myclick={this.clickHangler.bind(this,"修门")}
            name={this.state.persons[0].name} count={this.state.persons[0].count}/>
            <Person 
            myclick={this.clickHangler.bind(this,"修门")}
            name={this.state.persons[1].name} count={this.state.persons[1].count}/>
            <Person name={this.state.persons[2].name} count={this.state.persons[2].count}>wohe</Person> */}
          </div>
      )
    }
    return (
      // className 是jsx的内置的一个东西
      <div className="App">
        <p>hello</p>
        {/* 
        点击事件的写法：onClick={this.clickHangler}  后面不要加（）不然加载时会自动执行这个事件 
        带参数的点击事件写法（es6写法）：onClick={()=> this.clickHangler("修门")}
        带参数的点击事件写法（bind写法）: onClick={this.clickHangler.bind(this,"修门")
        */}
        <button style={style} onClick={this.clickHangler.bind(this,"修门")}>更改值</button>
        <button style={style} onClick={this.toGgle}>更改状态</button>
         {/* this指的是你定义的类  */}
         {/* { this.state.isShow?
           <div>
              <Person
              mychange={this.changeHangler}
              myclick={this.clickHangler.bind(this,"修门")}
              name={this.state.persons[0].name} count={this.state.persons[0].count}/>
              <Person 
              myclick={this.clickHangler.bind(this,"修门")}
              name={this.state.persons[1].name} count={this.state.persons[1].count}/>
              <Person name={this.state.persons[2].name} count={this.state.persons[2].count}>wohe</Person>
            </div>
            :''
         } */}
         {this.state.isShow?person:''}
         
      </div>
    );
  }
}

export default App;
