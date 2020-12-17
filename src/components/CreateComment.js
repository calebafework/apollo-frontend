import React, { Component } from 'react'
import CommentModel from '../models/comment'
import createComment from './createComment.css'
import axios from 'axios'


class CreateComment extends Component {
    state = {
        content: "",
        completed: false,
        url: "",
    }

    playlist = {
        anger: '20Bbvjfo6UGSieemnaa62R',
        disgust: '6SugLh3r9BscE1Srn5Rf6B',
        fear:'6SugLh3r9BscE1Srn5Rf6B',
        joy: '6SugLh3r9BscE1Srn5Rf6B',
        sadness:'6SugLh3r9BscE1Srn5Rf6B',
        //if undefined, playlist
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:4000/api/v1/emotion")
        .then(tone => {
            console.log(this.playlist.fear)
            // this.state.url = this.playlist.tone
            this.setState({url: this.tone}) 
        }).catch(err => console.log("TONE ERROR", err))
        CommentModel.create(this.state)
        .then(data => {
            this.props.history.push({
                pathname: '/comment',
                state: { comment: data, url: this.state.url },
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