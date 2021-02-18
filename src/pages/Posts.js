import React, { Component } from 'react';
import { dataActions, dataSelectors } from '../repository/state/duck/data';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Comments from './Comments';
import Accordion from 'react-bootstrap/Accordion';
import fondo from './../images/unnamed.png'


class Posts extends Component {
    
    constructor(props) {
		super(props);
		this.state = {
			idUser: this.props.match.params.idUser,
            name: this.props.match.params.name
		};
	}

    async componentDidMount(){
        await this.props.getPosts(this.state.idUser);
    }

    render() {
        return(
            <>
            <Row className="mt-5 p-5 text-center" style={{
                backgroundImage: `url(${fondo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '17% 77%',
                backgroundPositionX: '16%',
                backgroundPositionY: 'center',
                backgroundColor: '#ffdf00',
                color: '#15869D'
            }}>
                <Container fluid="md">
                    <Col>
                        <h1> Posts by {this.state.name}</h1>
                    </Col>
                </Container>
            </Row>
            <Container fluid="md">
                <Row className="mt-2 mb-4">
                    <Col>
                        {this.props.posts.map((post, index) => {
                            return ( 
                                <Card  key={index} className="mt-4">
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>{post.body}</Card.Text>
                                    </Card.Body>
                                    <Accordion>
                                        <Card>
                                            <Card.Header style={{backgroundColor: '#15869D'}}>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={index+1} className="text-white text-decoration-none">
                                                Comments
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={index+1}>
                                                <Comments postId={post.id}/>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card> 
                            )
                        })}
                    </Col>  
                </Row>
                
            </Container>
            </>
        )
    }
}

const mapStateToProps = state => ({
    posts: dataSelectors.getPosts(state),
});

const mapDispatchToProps = dispatch => ({
    getPosts: (idUser) => dispatch(dataActions.getPosts(idUser)),
    getComments: (idPost) => dispatch(dataActions.getComments(idPost)),
});


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Posts);