import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import CommentModel from "../models/comment"

const CommentShow = (props) => {
    const [comment, setComment] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const [url, setUrl]= useState(null)   
    
    const location = useLocation()
    
    const getInfo = async() => {
        const info = await CommentModel.show()
        setComment(info)
    }

    useEffect(() => {
        setComment(location.state.comment.content)
        setUrl(location.state.url)
        // getInfo()
    },[])

    const handleDelete = async() => {
        const res = await CommentModel.delete(comment.id)
        console.log(res)
        props.history.push('/')
    }
    
    const handleUpdate = async () => {
        const res = await CommentModel.update(comment)
        console.log(res)
        getInfo()
    }

    if(!comment){
        return null
    }

    const displayInfo = (
        <div>
            { comment ? <h4>{ comment }</h4> : <h4>No comment</h4>} 
        </div>
    )

    const handleChange = (e) =>{
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const editComment = () => {
        if(editMode){
            handleUpdate()
        }
        setEditMode(!editMode)
    }

    const editInfo = (
        <div>Edit
            <div>
                <input 
                    type="text"
                    name="comment"
                    value={ comment.content}
                    onChange= {handleChange}
                />
            </div>
        </div>
    )

    return (
        <div>
            <iframe src={"https://open.spotify.com/embed/playlist/"+ url} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            { editMode ? editInfo : displayInfo }
                <div>           
                    <button onClick={ handleDelete } className="deleteButton">Delete</button>
                    <button onClick={ editComment } className="editButton">{ editMode ? "Save Changes" : "Edit" }</button>
                </div>    
        </div> 
    );
}

export default CommentShow;
