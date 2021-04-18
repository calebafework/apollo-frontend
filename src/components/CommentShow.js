import React, { useState } from "react";
import CommentModel from "../models/comment";

//use the props from the comment: id , tone , content
//pass as props not hooks, set id to comment.id etc.
//destructure that off the properties

const CommentShow = (props) => {
  // const playlist = {
  //   anger: "20Bbvjfo6UGSieemnaa62R",
  //   disgust: "6SugLh3r9BscE1Srn5Rf6B",
  //   fear: "6SugLh3r9BscE1Srn5Rf6B",
  //   joy: "6SugLh3r9BscE1Srn5Rf6B",
  //   sadness: "6SugLh3r9BscE1Srn5Rf6B",
  // };
  
  // const [comment, setComment] = useState(null);
  // const [editMode, setEditMode] = useState(false);
  // console.log(props.comment)
  
  const displayInfo = (
    <div>
      <div> Comment:</div>
      <div>{props.comment ? <h4>{props.comment.content}</h4> : <h4>No comment</h4>}</div>
    </div>
  );
    console.log("commentShow", props)
    if(props && props.comment && props.playlistUrl){
      
      return (
      <div>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${props.comment.playlistUrl}` }
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        {displayInfo}
      </div> 
    );
    }else{
      return(
        <div>
          NO COMMENT
        </div>

      )
    }
};

export default CommentShow;
