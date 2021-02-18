
const getUsers = async() => 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {return users} );

const getPosts= async(idUser) => 
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
        .then(response => response.json())
        .then(posts => {return posts} );

const getComments= async(idPost) => 
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
        .then(response => response.json())
        .then(comments => {return comments} );


export default {
	getUsers,
    getPosts,
    getComments
};
