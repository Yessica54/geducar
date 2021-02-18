import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { dataActions, dataSelectors } from '../repository/state/duck/data';
import { connect } from 'react-redux'
import fondo from './../images/unnamed.png'

class Home extends Component {

    async componentDidMount(){
        await this.props.getUsers();
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
                            <h1>Lists Users</h1>
                        </Col>
                    </Container>
                </Row>
                <Container fluid="md">
                    <Row className="mt-5">
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr align="center">
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.users.map((user, index) => {
                                        return (
                                            <tr key={index} align="center">
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>
                                                    <Button size="sm" style={{backgroundColor: '#15869D'}}>
                                                        <Link to={`/posts/${user.id}/${user.name}`} className="text-white text-decoration-none">
                                                            Posts
                                                        </Link>
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
const mapStateToProps = state => ({
    users: dataSelectors.getUsers(state),
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(dataActions.getUsers()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
