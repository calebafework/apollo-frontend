import React from 'react';
import Comment from './Comment'

const CommentList = () => {
    let comments = [
        {
            content: "comment1"
        },
        {
            content: "comment2"
        },
        {
            content: "comment2"
        }
    ]
    const allComments = comments.map((comment, index)=> {
        return (
            <Comment
                key={ index }
                content = { comment.content }
            />
        );
    })
    return (
        <div>   
            { allComments }
        </div>
    )
}

export default CommentList;
