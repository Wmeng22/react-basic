import React, { Component } from 'react';
import './App.css';
// 引用自己的文件要加./
import Persons from './../components/persons/persons'   
import MyHeader from './../components/header/header'


// 有状态组件，有class
class App extends Component {
  //es6
  constructor(props){
    super(props); //constructor要写super 不然会报错
    console.log(props)
    console.log('[app] constructor is running')
    //state 用于改变组件内容状态的值（动态）
    //props 用于组件通信进行传值
    this.state = {
      persons:[
        {name:'蒙蒙',count:2,id:1},
        {name:'花花',count:3,id:2},
        {name:'hua2',count:4,id:4},
      ],
      isShow:false
    }
  }
  

  componentWillMount(){
    console.log('[app] componentWillMount is running')
  }

  componentDidMount(){  //内容已经渲染
    console.log('[app] componentDidMount is running')
  }
  
  changeHangler = (event,id) =>{
    // findIndex()函数查找目标元素，找到就返回元素的位置
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    })
    console.log(personIndex)
    
    const person = {
      ...this.state.persons[personIndex]
    }
    console.log(person)
    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
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
    console.log('render is running')
    let person = null;
    if(this.state.isShow){
      person = <Persons 
      persons = {this.state.persons}
      mychange={this.changeHangler}
      myclick={this.deleteHangler}
      />
      // person = (
      //   <div>
      //     {/* 用for 循环渲染 */}
      //     {
      //       this.state.persons.map((person,index) =>{
      //         return <Person mychange={(event)=>this.changeHangler(event,person.id)} myclick={()=> this.deleteHangler(index)}  key={index} name={person.name} count={person.count}/>
      //       })
      //     }
      //       {/* <Person
      //       mychange={this.changeHangler}
      //       myclick={this.clickHangler.bind(this,"修门")}
      //       name={this.state.persons[0].name} count={this.state.persons[0].count}/>
      //       <Person 
      //       myclick={this.clickHangler.bind(this,"修门")}
      //       name={this.state.persons[1].name} count={this.state.persons[1].count}/>
      //       <Person name={this.state.persons[2].name} count={this.state.persons[2].count}>wohe</Person> */}
      //     </div>
      // )
      
    }

    // const classes= []
    // if(this.state.persons.length<=2){
    //   classes.push("red")
    // }
    // if(this.state.persons.length<=1){
    //   classes.push("bold")
    // }
    return (
      // className 是jsx的内置的一个东西
      <div className="App">
        <MyHeader
           persons = {this.state.persons}
           toGgle  = {this.toGgle}
           clickHangler  = {this.clickHangler}
           isShow={this.state.isShow}
        />
        {/* 动态添加class 用join的原因是calss不能是数组，所以要用join转为字符串*/}
        {/* <p className={classes.join(' ')}>hello</p> */}
        {/* 
        点击事件的写法：onClick={this.clickHangler}  后面不要加（）不然加载时会自动执行这个事件 
        带参数的点击事件写法（es6写法）：onClick={()=> this.clickHangler("修门")}
        带参数的点击事件写法（bind写法）: onClick={this.clickHangler.bind(this,"修门")
        */}
        {/* <button style={style} onClick={this.clickHangler.bind(this,"修门")}>更改值</button>
        <button style={style} onClick={this.toGgle}>更改状态</button> */}
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
