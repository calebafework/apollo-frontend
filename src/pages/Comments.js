import CommentList from "../components/CommentList"
import React, {useState, useEffect} from 'react';

const Comment = (props) => {
    let [url, setUrl]= useState(null)

    return (
        <div className="commentlist">
            <CommentList/>
        </div>
    );
}

export default Comment;