import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    slectedId: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Burhan",
            date: "23/10/2020",
          };
        });
        this.setState({ posts: updatedPosts });
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
        //   this.setState({error: true});
      });
  }

  postSelectHandler(id) {
    // this.setState({ slectedId: id });
    this.props.history.push("/FullPost/" + id);
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong...!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
            <Post
            key={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            clicked={() => this.postSelectHandler(post.id)}
          />
        );
      });
    }
    return (
        <section className="Posts">{posts}</section>
    );
  }
}

export default Posts;
