import React from 'react'
import Comment from '../components/Comment'
import CommentShow from '../components/CommentShow';

const CommentPage = () => {

    return (
        <div>
            <h3> Based off your input, Apollo has curated a playlist for you</h3>   
            <CommentShow/>
        </div>
    );
}

export default CommentPage;
