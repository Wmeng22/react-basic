import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {store} from './store'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import './App.css';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* React-Redux 提供Provider组件，可以让容器组件拿到state*/}
        <div className="App">
          <PostForm/>
          <Posts/>
          
        </div>
      </Provider>
    );
  }
}

export default App;
