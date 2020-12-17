import React, {useState, useEffect} from 'react';

const Comment = (props) => {
    let [url, setUrl]= useState(null)

    return (
        <div>
            <p>{props.content}</p>
        </div>
    );
}

export default Comment;
