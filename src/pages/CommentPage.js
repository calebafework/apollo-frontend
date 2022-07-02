import React, { useState, useEffect } from "react";
//import Comment from "../components/Comment";
//import { Route } from "react-router-dom";
import CommentShow from "../components/CommentShow";
import CommentModel from "../models/comment";

// add a useEffect to get a single comment from match
// we want a useEffect that gets a single comment by :/ID
// THIS FUNCTIOn is not in comment model
// we want to get id from match.property 
// we want to do a similar thing using hooks for comment/set comment
// setState to null 
// useEffect to fetch data based on ID in match params 
// we will have to create showById in the comment model
// pass through ID and then fetch with that ID using the string interpolation with `${}`

//setCommentId = match.params.id ??

const CommentPage = ({ match }) => {
  const [comment, setComment] = useState(null);
  
  useEffect(() =>{
    CommentModel.showById(match.params.id).then((data) => {
      //setting the playlist object to the value of data.tone to match the tone
      setComment(data) 
    })
  },[match.params.id]);
  console.log(match.params.id)


  return (
    <div>
      <h3> Based off your input, Apollo has curated a playlist for you</h3>
      <CommentShow comment = {comment}/>
    </div>
  );
};

export default CommentPage;
