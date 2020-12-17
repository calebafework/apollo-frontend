import React from 'react';
import CommentShow from '../components/CommentShow';
import CreateComment from '../components/CreateComment';

const Home = (props) => {

    return (
        <div>
            <h3>Taking it's name from the Olympian God of music, Apollo is a   </h3>
            <h3>To use Apollo simply tell us, in a few sentences, how you're doing today.</h3>         
            <CreateComment { ...props } />
        </div>
    );
}

export default Home;
