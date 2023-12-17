import axios from 'axios';

fetch( "http://localhost:3000/", {
    method: "get",
    credentials: "include"
})
    .then( response => response.text())
    .then( data => console.log( "Response using Fetch: ", data ) );


axios( "http://localhost:3000/", {
    withCredentials: true
})
    .then( response => response.data )
    .then( data => console.log( "Response using Axios: ", data ) );