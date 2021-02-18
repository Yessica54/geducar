import React, { useEffect, useState } from 'react';
import { dataActions, dataSelectors } from '../repository/state/duck/data';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

function Comments(props) {

    const [count, setCount] = useState([]);

    useEffect(async () => {
        let co = await props.getComments(props.postId);
        setCount(co.payload)
    }, []); 

    return (
        <ListGroup variant="flush">
            {count.map((comment, index) => {
                return(
                    <ListGroup.Item key={index}>
                        <blockquote >
                            <p>
                                <strong>{comment.name}</strong><br/>
                                <small>{comment.body}</small>
                            </p>
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{comment.email}</cite>
                            </footer>
                        </blockquote>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    );
}

const mapStateToProps = state => ({
    comments: dataSelectors.getComments(state),
});

const mapDispatchToProps = dispatch => ({
    getComments: (idPost) => dispatch(dataActions.getComments(idPost)),
});


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Comments);
