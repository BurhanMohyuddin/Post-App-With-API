import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    if (this.props.match.params.id) {
        if(!this.state.loadedPost ||(this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {

            axios
              .get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
              .then((response) => {
                this.setState({ loadedPost: response.data });
              });
        }
    }
  }

  deletePostHandler = () => {
      axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then(response => {
          console.log(response);
      })
      this.props.history.goBack();
  }
  render() {
    let post = <p style={{ textAlign: "center", color:"wheat"}}>Please select a Post!</p>;
    if (this.props.match.params.id) {
         post = <p style={{ textAlign: "center", color:"wheat" }}>Loading....!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1 className="title">{this.state.loadedPost.title}</h1>
          <p className="body">{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
