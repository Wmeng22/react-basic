
//有状态组价的写法

import React, { Component } from 'react';
class PostForm extends Component{
    //es6
    constructor(props){
        super(props); //constructor要写super 不然会报错
        this.state={
            title:'',
            body:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            
        })
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    // componentWillMount(){
    //     console.log('[Person] componentWillMount is running')
    // }

    componentDidMount(){  //内容已经渲染
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data => {
            this.setState({
                title:'',
                body:''
            })
            
        })

    }
    render(){
        return (
            <div>
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>title</label>
                        <input type="text" name="title" 
                        value={this.state.title}
                        onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>body</label>
                        <textarea name="body" 
                        value={this.state.body}
                        onChange={this.onChange}></textarea>
                    </div>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
    
}

export default PostForm;





