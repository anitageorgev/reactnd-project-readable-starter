import React, { Component } from 'react';
import SinglePost from './SinglePost'

class PostList extends Component{
    render(){
        return (
            <div>
                <p>List of posts here</p>
                <SinglePost/>
            </div>
        );
    }
}

export default PostList