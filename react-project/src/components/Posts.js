
//有状态组价的写法

import React, { Component } from 'react';
import propTypes from  'prop-types'
import { connect } from 'react-redux';
import {fetchPosts} from './../actions/postActions'

class Posts extends Component{
    //es6
    // constructor(props){
    //     super(props); //constructor要写super 不然会报错
    //     this.state={
    //         posts: []
    //     }
    // }
  

    // componentWillMount(){
    //     console.log('[Person] componentWillMount is running')
    // }

    componentDidMount(){  //内容已经渲染
        //触发action操作
        this.props.fetchPosts();

    }

    componentWillReceiveProps(nextProps){
        // if(nextProps.newPost){
        //     this.props.posts.unshift(nextProps.newPost)
        // }
    }


    render(){
        const postItem = this.props.posts.map(post =>(   //posts来自于mapStateToProps
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
Posts.propTypes ={
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired
}
//获取reducer的状态
const mapStateToProps = state => ({
    posts: state.posts.items,   //这个posts来自于index.js
    newPost: state.posts.item
})
export default connect(mapStateToProps,{fetchPosts}) (Posts);





