import React, {useState, useEffect} from 'react';

const Comment = (props) => {

    return (
        <div>
            <p>{props.content}</p>
        </div>
    );
}

export default Comment;
