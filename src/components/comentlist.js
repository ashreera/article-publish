import React, { Component } from 'react';

const Post = (props) => {
    return (<React.Fragment><li >
            {props.post.id} - {props.post.content}
          </li>
          <div>
          {props.post.comments.map((comment, i) => (<div>{comment.comment}</div>))}
          
          </div>
          </React.Fragment>
          );
  
  };
  
  export default Post;
