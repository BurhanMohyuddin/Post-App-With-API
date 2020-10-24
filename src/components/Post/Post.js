import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" >
        <div onClick={props.clicked}>
        <h3 className="Title">{props.title}</h3>
      </div>
        <div className="Info">
            <div className="Author">{props.author}</div>
            <div className="Date">{props.date}</div>
        </div>
        <div>
            {props.name}
        </div>
        
    </article>
);

export default post;