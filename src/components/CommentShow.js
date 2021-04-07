import React, { useState } from "react";
import CommentModel from "../models/comment";

//use the props from the comment: id , tone , content
//pass as props not hooks, set id to comment.id etc.
//destructure that off the properties

const playlist = {
  anger: "20Bbvjfo6UGSieemnaa62R",
  disgust: "6SugLh3r9BscE1Srn5Rf6B",
  fear: "6SugLh3r9BscE1Srn5Rf6B",
  joy: "6SugLh3r9BscE1Srn5Rf6B",
  sadness: "6SugLh3r9BscE1Srn5Rf6B",
};

const CommentShow = (props) => {
  const [comment, setComment] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = async () => {
    const res = await CommentModel.delete(comment.id);
    console.log(res);
    props.history.push("/");
  };

  const handleUpdate = async () => {
    const res = await CommentModel.update(comment);
    console.log(res);
  };

  if (!comment) {
    return null;
  }

  const displayInfo = (
    <div>{comment ? <h4>{comment}</h4> : <h4>No comment</h4>}</div>
  );

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const editComment = () => {
    if (editMode) {
      handleUpdate();
    }
    setEditMode(!editMode);
  };

  const editInfo = (
    <div>
      Edit
      <div>
        <input
          type="text"
          name="comment"
          value={comment.content}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  return (
    <div>
      <iframe
        src={"https://open.spotify.com/embed/playlist/" }
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      {editMode ? editInfo : displayInfo}
      <div>
        <button onClick={handleDelete} className="deleteButton">
          Delete
        </button>
        <button onClick={editComment} className="editButton">
          {editMode ? "Save Changes" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default CommentShow;
