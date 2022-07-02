import React from 'react';
import CommentShow from '../components/CommentShow';
import CreateComment from '../components/CreateComment';
import './Home.css'
import apollo from "../apollo2.jpg"


const Home = (props) => {

    return (
        <div id="homebody">
            <img src={apollo} alt='img1' id="apollo"></img>
            <div id="description">
                Named after the Olympian God of music, Apollo takes an input and curates a playlist based off the mood of your input. 
                To use Apollo simply write a brief paragraph about how you're feeling. Apollo will then analyze the tone of your paragraph and provide you 
                with a Spotify playlist. From there, you will sign into your Spotify account to listen to the playlist.                         
            </div>
            <div id="description-2">
                To use Apollo simply tell us, in a few sentences, how you're doing today.
            </div>
            <CreateComment { ...props } />
        </div>
    );
}

export default Home;
