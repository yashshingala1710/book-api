const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:8000/api/books';

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(BASE_URL);
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

// Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}?author=${author}`);
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

// Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}?title=${title}`);
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

// Call functions (example)
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("John Doe");
getBooksByTitle("Python Basics");
