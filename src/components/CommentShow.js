import React, { useEffect, useState } from 'react';
import CommentModel from "../models/comment"

const CommentShow = ({history, match}) => {
    const [comment, setComment] = useState(null)
    const [editMode, setEditMode] = useState(false)

    const getInfo = async() => {
        const info = await CommentModel.show(match.params.id)
        setComment(info)
    }

    useEffect(() => {
        getInfo()
    },[])

    const handleDelete = async() => {
        const res = await CommentModel.delete(comment.id)
        console.log(res)
        history.push('/')
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
                <h1>{ comment.content }</h1>
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
            { editMode ? editInfo : displayInfo }
            {/* { localStorage.getItem('id') ?  */}
                <div>           
                    <button onClick={ handleDelete }>Delete</button>
                    <button onClick={ editComment }>{ editMode ? "Save Changes" : "Edit" }</button>
                </div>    
        </div> 
    );
}

export default CommentShow;
