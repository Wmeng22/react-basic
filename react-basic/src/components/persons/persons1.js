


import React from 'react'
import Person from './person/person'


// 无状态组件,没有组件周期
const persons = (props) =>{
    return props.persons.map((person,index) =>{
        return <Person
        mychange={(event)=>props.mychange(event,person.id)}
        myclick={()=> props.myclick(index)}
        key={person.id}
        name={person.name}
        count={person.count}
        />
    })
}


export default persons

