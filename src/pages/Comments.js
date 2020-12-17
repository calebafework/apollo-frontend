import React from 'react';
import CommentList from '../components/CommentList'
import Emotion from '../components/Emotion';

const Comments = () => {
    return (
        <div className="commentlist">
            <CommentList/>
            <Emotion/>
        </div>
    );
}

export default Comments;
