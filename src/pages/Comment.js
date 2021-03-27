import React from 'react';
import Comment from '../components/Comment';
import { Route } from 'react-router-dom';
import CommentShow from '../components/CommentShow';

const CommentPage = ({match}) => {
    return (
        <div>
            <h3> Based off your input, Apollo has curated a playlist for you</h3>
            <Route
                path={`${match.path}/comment/:id`}
                render={routeProps => <CommentShow />}
            />
        </div>
    );
};

export default CommentPage;
