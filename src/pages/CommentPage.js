import React, { useState, useEffect } from "react";
import Comment from "../components/Comment";
import { Route } from "react-router-dom";
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
  
  const playlist = {
    anger: "20Bbvjfo6UGSieemnaa62R",
    disgust: "6SugLh3r9BscE1Srn5Rf6B",
    fear: "6SugLh3r9BscE1Srn5Rf6B",
    joy: "6SugLh3r9BscE1Srn5Rf6B",
    sadness: "6SugLh3r9BscE1Srn5Rf6B",
  };

  useEffect(() =>{
    CommentModel.showById(match.params.id).then((data) => {
      console.log("data", data, playlist, "playlist hash", playlist[data.tone])
      console.log("match", match.params.id)
      //setting the playlist object to the value of data.tone to match the tone
      data.playlistUrl = playlist[data.tone]
      setComment(data) 
    })
  },[match.params.id]);

  return (
    <div>
      <h3> Based off your input, Apollo has curated a playlist for you</h3>
      <CommentShow comment = {comment}/>
    </div>
  );
};

export default CommentPage;
