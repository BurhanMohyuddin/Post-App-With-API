import React, { Component } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    posts: [],
    slectedId:null,
    error: false
  };
  

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const posts= response.data.slice(0,4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Burhan'
        }
      });
      this.setState({posts: updatedPosts});
      //console.log(response);
    })
    .catch(error => {
      this.setState({error: true});
    });
  }

  postSelectHandler(id) {
    this.setState({slectedId: id})
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong...!</p>
    if (!this.state.error){
        posts = this.state.posts.map(post => {
        return <Post key={post.id} 
        title={post.title} 
        author={post.author}
        clicked={() => this.postSelectHandler(post.id)}/>
      });
    }

    return (
      <div className="App">
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost id={this.state.slectedId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default App;
