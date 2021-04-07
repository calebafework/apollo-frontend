import CommentList from "../components/CommentList";
import React, { useState, useEffect } from "react";
import CommentModel from "../models/comment";


// this component is rendered from a route that doesnt req props
// render only needed during CLASS based components , not functional components
// only return req for functional components
// research differences !
// get data from useeffect function through the state
// we want to use a UseState hook to be able to pass comments as data in CommentList html return


const Comment = () => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    CommentModel.showAllComments().then((data) => {
       // when using hooks we always need to use the set state to return data
       // if we're doing something in a function, we need a way to propogate data into state
       // data is not readily available within the scope of a function   
      setComments(data);
    });
  }, []);

  return (
    <div className="commentlist">
      <CommentList comments={comments} />
    </div>
  );
};

export default Comment;
