import axios from 'axios';

export function getPost(postId) {
    return axios.get('https://jsonplaceholder.typicode.com/todos/' + postId);
}

export function getComments(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}/comments`);
}


export function getTodosList() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
}