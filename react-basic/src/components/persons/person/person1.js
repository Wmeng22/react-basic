
//没有生命周期的写法（无状态组件）
import React  from 'react';
import './person.css'
const person = (props) => {
    return (
        <div >
            <p  onClick={props.myclick}>大家好我是{props.name},我有{props.count}</p>
            <p className='person'>{props.children}</p>
            <input type="text" onChange={props.mychange} defaultValue={props.name}/>
        </div>
    )
}

export default person





