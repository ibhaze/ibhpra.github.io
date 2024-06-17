# Project Name

## Overview

This project is a simple blog application built using Node.js and React. It helps in understanding the basics of Node.js and React, including setting up a server, handling API requests, and managing state in React.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/projectname.git
    cd projectname
    ```

2. Install dependencies for the Node.js server:
    ```bash
    npm install
    ```

3. Start the Node.js server:
    ```bash
    node index.js
    ```

4. Install dependencies for the React application:
    ```bash
    cd client
    npm install
    ```

5. Start the React application:
    ```bash
    npm start
    ```

## Key Features

- Fetch and display random jokes using Node.js.
- Basic styling with CSS.
- Simple blog application with React for adding and displaying posts.
- Firebase integration for storing and retrieving blog posts.

## Code Snippets

### Node.js: Fetching a Random Joke


// index.js
const oneLinerJoke = require('one-liner-joke');
// Get a random joke
const getRandomJoke = oneLinerJoke.getRandomJoke();
// Log the joke to the console
console.log(getRandomJoke.body);


## React : adding a post 
// AddPost.js
import React, { useState } from 'react';
import firestore from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("Please add a title and content for your blog post.");
            return;
        }
        await addDoc(collection(firestore, 'posts'), {
            title,
            content,
            createdAt: new Date(),
        });
        setTitle('');
        setContent('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post Content"
            />
            <button type="submit">Add Post</button>
        </form>
    );
};
export default AddPost;
## React : displaying a post 
// Posts.js
import React, { useEffect, useState } from 'react';
import firestore from './firebase-config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const q = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const postsArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(postsArray);
        });
        return () => unsubscribe();
    }, []);
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};
export default Posts;


# Areas for Improvement
1. Code Organization: Split the code into smaller, more manageable modules.
2. Error Handling: Add more robust error handling in the API requests and form submissions.
3. Styling: Improve the CSS for better responsiveness and user experience.