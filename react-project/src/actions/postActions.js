
import {FETCH_POSTS,NEW_POSTS} from './type'
// import Posts from '../components/Posts';


//分发操作
// export function fetchPosts() {
//     return function (dispatch) {
//         fetch("http://jsonplaceholder.typicode.com/posts")
//         .then(res=> res.json())
//         .then(data => {
//             dispatch({
//                 type: FETCH_POSTS,    //type一定要有
//                 payload: data
//             })
//         })
//     }
// }

//es6写法
export const fetchPosts = () => dispatch =>  {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(data => {
        dispatch({
            type: FETCH_POSTS,    //type一定要有
            payload: data
        })
    })
}


export const createPost = postData => dispatch =>  {
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(res=> res.json())
    .then(data => 
        dispatch({
            type: NEW_POSTS,    //type一定要有
            payload: data
        })
        
    )
}