import React, { useState, useEffect }from 'react';
import Comment from './Comment'
import CommentModel from '../models/comment'
import commentList from './commentList.css'

const CommentList = () => {
    const [comments, setComments] = useState([])

    useEffect(()=>{
        //fetch data
        CommentModel.index().then((data)=>{
            setComments(data)
        })
    },[])

    const allComments = comments.map((comment, index)=> {
        return (
            <div className="commentList">
                {/* <Comment
                    key={ index }
                    content = { comment.content }
                /> */}
            </div>    
        );
    })
    return (
        <div>   
            <h3>All Comments</h3>
            { comments.length ? allComments : <h3>No comments to display</h3> }
        </div>
    )
}

export default CommentList;
