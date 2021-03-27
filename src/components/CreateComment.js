import React, { Component, useState } from 'react'
import CommentModel from '../models/comment'
import createComment from './createComment.css'
import axios from 'axios';

class CreateComment extends Component {
    state = {
        content: "",
        completed: false,
        url: "",
    }
    // post to tone analyzer and return the tone
    // tone must be stored in EMOTION MODEL = {mood: string}
    //
    handleSubmit = (event) => {
        event.preventDefault()
        // const text = comment.content
        axios
        .post("http://localhost:4000/api/v1/emotion")
        .then(tone => {
            // this.state.url = this.playlist.tone
            this.setState({url: this.tone}) // coming back undefined
        }).catch(err => console.log("TONE ERROR", err))
        CommentModel.create(this.state)
        .then(data => {
            this.props.history.push({
                pathname: `/comment/${data.id}`,
                // state: { comment: data, url: this.state.url },
                state: { comment: data, emotions: this.state.url }
            })
        })
    }


    handleChange = (event) => {
        if (event.target.type !== 'text') {
            this.setState({ completed: !this.state.completed })
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="form">
                <form onSubmit={ this.handleSubmit } >
                    <div className="form-input">
                        {/* Controlled Input */}
                        <input
                        type="text"
                        name="content"
                        onChange={ this.handleChange }
                        value={ this.state.content }
                        className="inputForm"
                        />
                    </div>
                    <input type="submit" value="Curate" className="button"/>
                </form>
            </div>
        )
    }
}

export default CreateComment;