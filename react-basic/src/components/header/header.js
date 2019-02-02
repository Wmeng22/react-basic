import React from 'react';
import  './header.css';



const MyHeader = (props) =>{
    const style ={
        backgroundColor: 'white',
        boder:'1px solid blue'
    }
    const assignClasses= []
    if(props.persons.length<=2){
        assignClasses.push('red')
    }
    if(props.persons.length<=1){
        assignClasses.push('bold')
    }
    if(props.isShow){
        style.backgroundColor = "red"
    }
    return (
        <div>
            <p className={assignClasses.join(' ')}>hello</p>
            <button style={style} onClick={()=>props.clickHangler("修门")}>更改值</button>
            <button style={style} onClick={props.toGgle}>更改状态</button>
        </div>
    )
}


export default MyHeader

