import React from "react";
import Comment from "./Comment";


// import commentList from './commentList.css'
// ? is a shorthand for an if statement, saying if comments is there do this , if not do THIS
// the first thing after ? is checking if said thing is there 
// after : its checking if its NOT there 
// : comments(true) ? comments(false) 


const CommentList = ({ comments }) => {
  const allComments = comments ? (
      // whenever mapping and returning JSX, make sure key is in outermost <> parent 
    comments.map((comment, index) => {
      return (
        <div className="commentList" key={index}>
          <Comment content={comment.content} />
        </div>
      );
    })
  ) : (
    <h3>No comments to display</h3>
  );
  return (
    <div>
      <h3>All Comments</h3>
      {allComments}
    </div>
  );
};

export default CommentList;
