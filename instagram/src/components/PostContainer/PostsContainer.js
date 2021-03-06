import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from "styled-components";

const PostWrapper = styled.div`
  height: 50%;
  width: 45%;
  min-width: 300px;
  margin: 5px auto;
`;
const PostsContainer = props =>{
    return (
        <div className="posts-container-wrapper">
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </div>
    );
};

export default PostsContainer;