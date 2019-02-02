
//有状态组价的写法

import React, { Component } from 'react';
class Posts extends Component{
    //es6
    constructor(props){
        super(props); //constructor要写super 不然会报错
        this.state={
            posts: []
        }
    }
  

    // componentWillMount(){
    //     console.log('[Person] componentWillMount is running')
    // }

    componentDidMount(){  //内容已经渲染
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data => {
            this.setState({
                posts: data
            })
        })

    }
    render(){
        const postItem = this.state.posts.map(post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItem}
            </div>
        )
    }
    
}

export default Posts;





