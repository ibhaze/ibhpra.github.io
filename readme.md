# THE FIRST DEVELOPMENT ASSIGNMENT 
The first development assignment we had was the node.js assignment that helped me to understand the basics of node.js 
....// index.js
const oneLinerJoke = require('one-liner-joke');
// Get a random joke
const getRandomJoke = oneLinerJoke.getRandomJoke();
// Log the joke to the 
console.log(getRandomJoke.body);

## MY CSS /* Resetting default margin and padding for all elements */
* {/* Resetting default margin and padding for all elements */
* {
  margin: 0;
  padding: 0;
}

.outcome-container {
  position: relative;
  display: inline-block;
  margin-right: 100px;
  /* Adjust the right margin as needed */
  margin-top: 10px;
}

.outcome-icon {
  width: 50px;

}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Center the overlay */
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  /* Adjust the font size */
  padding: 5px 8px;
  /* Add padding */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.outcome-container:hover .overlay {
  opacity: 1;
}

/* Styling for the body */
body {
  padding: 0;
  background-color: #090909;
  /* Sets the background color of the body */
  font-family: 'Roboto', sans-serif;
  /* Applies the Roboto font family to the body text */
  color: white;
  /* Sets the color of the body text */
  overflow-y: scroll;
  /* Ensures vertical scrollbar is always visible */
  scroll-behavior: smooth;
}

/* Hides the scrollbar for WebKit browsers (Chrome, Safari, etc.) */
::-webkit-scrollbar {
  display: none;
}

/* Hides scrollbar for Firefox */
body {
  scrollbar-width: none;
}

/* Styling for the logo */
.logo {
  width: 60px;
  /* Sets the width of the logo */
}

/* Styling for text with a stroke effect */
.stroke-text {
  font-size: 30px;
  /* Sets the font size of the text */
  color: black;
  /* Sets the color of the text */
  -webkit-text-stroke: 1px white;
  /* Applies a white stroke to the text for WebKit browsers */
}

/* Styling for the navbar */
.navbar {
  position: fixed;
  /* Fixes the navbar position on the viewport */
  top: 0;
  /* Aligns the navbar to the top of the viewport */
  width: 100%;
  /* Sets the navbar width to 100% of the viewport */
  height: 65px;
  /* Sets the height of the navbar */
  display: flex;
  /* Uses flexbox for layout */
  align-items: center;
  /* Aligns items vertically in the center */
  padding-top: 10px;
  /* Adds padding to the top of the navbar */
  z-index: 1000;
  /* Sets the stacking order of the navbar */
  background-color: #090909;
  /* Sets the background color of the navbar */
  color: white;
  /* Sets the color of the text in the navbar */
}

/* Styling for list items in the navbar */
.navbar li {
  list-style: none;
  /* Removes the default list styling */
  margin: 0 15px;
  /* Adds margin around each list item */
}

/* Margin adjustment for the first list item in the navbar */
.navbar li:first-child {
  margin-right: auto;
  /* Aligns the first list item to the left and pushes the rest to the right */
}

/* Styling for links in the navbar */
.navbar li a {
  text-decoration: none;
  /* Removes underline from links */
  color: white;
  /* Sets the color of the links */
  position: relative;
  /* Sets the position of the links relative to their normal position */
}

/* Styling for the underline effect on navbar link hover */
.navbar li a:hover::after {
  content: '';
  /* Adds a pseudo-element after the link */
  position: absolute;
  /* Positions the pseudo-element absolutely */
  left: 0;
  /* Aligns the pseudo-element to the left edge of the link */
  bottom: -3px;
  /* Sets the distance of the pseudo-element from the bottom of the link */
  width: 100%;
  /* Sets the width of the pseudo-element to match the link */
  height: 2px;
  /* Sets the height of the pseudo-element */
  background-color: white;
  /* Sets the color of the pseudo-element */
}

/* Styling for the main content */
main {
  margin-top: 150px;
  /* Adds margin space on top of the main content */
}


.pageheader h1 {
  text-align: center;
  margin-bottom: 110px;
  font-size: 120px;
  /* Sets the font size of the heading */
  font-weight: 220;
}

.pageheader {
  padding: 0 20px;
}

.allgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  text-align: justify;
  padding: 0 70px;
  grid-row-gap: 120px;

}

.allgrid-1 {
  grid-row: span 2;
}

.allgrid-2 {
  grid-row: span 2;
}

.allgrid h1 {
  align-items: center;
  text-align: center;
  font-size: 55px;
  padding-bottom: 40px;
}

.allgrid p {
  margin-bottom: 40px;
}

.gridimgcontainer {
  grid-column: 2;
  /* Sets the image container to span the second grid column */
  display: flex;
  /* Use flexbox for layout */
  justify-content: center;
  /* Center horizontally */
  align-items: center;
  /* Center vertically */
}

.gridimg {
  max-width: 100%;
  max-height: 100%;
}

/* Styling for the container */
.container {
  display: grid;
  /* Uses CSS Grid for layout */
  grid-template-columns: repeat(3, 1fr);
  /* Defines three columns with equal widths */
  grid-gap: 10px;
  /* Adds gap between grid items */
  justify-items: center;
  /* Aligns items in the center horizontally */
  align-items: start;
  /* Aligns items at the start of the container vertically */
  font-weight: 20;
  /* Sets the font weight (likely an error, should be a numeric value) */
}

/* Styling for the left column */
.left-column {
  grid-column: 1;
  /* Sets the left column to span the first grid column */
  text-align: right;
  /* Aligns text to the right within the column */
}

/* Styling for the right column */
.right-column {
  grid-column: 3;
  /* Sets the right column to span the third grid column */
  margin-top: 40px;
  /* Adds margin space on top of the column */
  text-align: left;
  /* Aligns text to the left within the column */
}

/* Styling for both left and right columns */
.left-column,
.right-column {
  max-width: 400px;
  /* Sets the maximum width for both columns */
  text-align: justify;
}

/* Styling for the image container */
.image-container {
  grid-column: 2;
  /* Sets the image container to span the second grid column */
  position: relative;
  /* Makes the image container a positioned parent for its children */
}

/* Styling for the centered image */
.centeredimg {
  width: 370px;
  /* Sets the width of the image */
  height: auto;
  /* Automatically adjusts the height to maintain aspect ratio */
}

/* Styling for the ABOUT heading */
.about-heading {
  position: absolute;
  /* Positions the ABOUT heading absolutely */
  bottom: -180px;
  /* Positions the heading 180px above the bottom of its containing block */
  left: 30%;
  /* Positions the heading 30% from the left edge of its containing block */
  transform: translateX(-50%);
  /* Centers the heading horizontally */
  font-size: 220px;
  /* Sets the font size of the heading */
  font-weight: 220;
  /* Sets the font weight (likely an error, should be a numeric value) */
  z-index: -1;
  /* Sets the stacking order of the heading */
}

/* Styling for icons */
.icons {
  width: 20px;
  /* Sets the width of the icons */
}

/* Styling for the footer */
footer {
  position: fixed;
  /* Positions the footer fixed to the viewport */
  bottom: 20px;
  /* Positions the footer 20px from the bottom of the viewport */
  right: 20px;
  /* Positions the footer 20px from the right edge of the viewport */
}

/* Styling for links within the footer */
footer a {
  display: block;
  /* Displays links as block elements */
}

a {
  cursor: url('emoji.svg'), pointer;
  /*This changes the shape of the cursor whenever the user hovers over a link */
}

/* Existing CSS styles remain unchanged */

/* Media queries and other existing styles remain unchanged */


/* Media query for smaller screens */
@media only screen and (max-width: 768px) {

  /* Adjustments for the navbar */
  .navbar {
    height: auto;
    /* Allows navbar height to adjust automatically */
    flex-direction: column;
    /* Stacks navbar items vertically */
    justify-content: center;
    /* Centers navbar items vertically */
    padding-top: 0;
    /* Removes top padding from the navbar */
  }

  /* Margin adjustment for list items in the navbar */
  .navbar li {
    margin: 10px 0;
    /* Adds vertical margin to navbar items */
  }

  /* Adjustments for the container */
  .container {
    grid-template-columns: 1fr;
    /* Displays one column in the container */
  }

  /* Adjustments for the ABOUT heading */
  .about-heading {
    font-size: 120px;
    /* Decreases font size of the ABOUT heading */
    bottom: -120px;
    /* Adjusts position of the heading */
  }

  p {
    font-size: 10px;
  }

  /* Margin adjustment for the main content */
  main {
    margin-top: 370px;
    /* Adjusts margin space on top of the main content */

  }

  .centeredimg {
    width: 300px;
  }

  .left-column,
  .right-column {
    max-width: 400px;
    /* Sets the maximum width for both columns */
  }
}


/* Media query for larger screens */
@media only screen and (min-width: 1200px) {

  /* Adjustments for the container */
  .container {
    grid-template-columns: repeat(3, 1fr);
    /* Displays three columns in the container */
  }
}
## Second css file 
* {
    box-sizing: border-box; /* Sets box-sizing property for all elements */
    margin: 0; /* Resets margin */
    padding: 0; /* Resets padding */
    font-family: Arial, Helvetica, sans-serif; /* Sets default font family */
}
.rotated-text { 
    width: 170px; /* Sets width of rotated text */
    transform: rotate(-10deg); /* Rotates the text */
    display: inline-block; /* Makes the text display inline */
    position: absolute; /* Sets position to absolute */
    right: 0; /* Positions the text to the right */
    top: 45%; /* Positions the text vertically */
}

.wrapper {
    width: 100%; /* Sets width to 100% */
    height: 100vh; /* Sets height to full viewport height */
    display: flex; /* Displays as flex container */
    align-items: center; /* Aligns items vertically center */
    justify-content: center; /* Centers items horizontally */
    margin-top: -220px; /* Adjusts top margin */
}

.container2{
    height: 400px; /* Sets height of container */
    display: flex; /* Displays as flex container */
    flex-wrap: nowrap; /* Prevents wrapping */
    justify-content: start; /* Aligns items to start */
}

.card {
    width: 80px; /* Sets width of card */
    border-radius: .75rem; /* Sets border radius */
    background-size: cover; /* Sets background size */
    cursor: pointer; /* Sets cursor to pointer */
    overflow: hidden; /* Hides overflow content */
    border-radius: 2rem; /* Sets border radius */
    margin: 0 10px; /* Sets margin */
    display: flex; /* Displays as flex container */
    align-items: flex-end; /* Aligns items to bottom */
    transition: .6s cubic-bezier(.28,-0.03,0,.99); /* Sets transition */
    box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8); /* Sets box shadow */
}

.card > .row {
    color: white; /* Sets text color */
    display: flex; /* Displays as flex container */
    flex-wrap: nowrap; /* Prevents wrapping */
}

.card > .row > .icon {
    background: #223; /* Sets background color */
    color: white; /* Sets text color */
    border-radius: 50%; /* Sets border radius */
    width: 50px; /* Sets width */
    display: flex; /* Displays as flex container */
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
    margin: 15px; /* Sets margin */
}

.card > .row > .description {
    display: flex; /* Displays as flex container */
    justify-content: center; /* Centers horizontally */
    flex-direction: column; /* Sets flex direction */
    overflow: hidden; /* Hides overflow content */
    height: 80px; /* Sets height */
    width: 520px; /* Sets width */
    opacity: 0; /* Sets opacity */
    transform: translateY(30px); /* Transforms */
    transition-delay: .3s; /* Sets transition delay */
    transition: all .3s ease; /* Sets transition */
}

.description p {
    color: #b0b0ba; /* Sets text color */
    padding-top: 5px; /* Sets padding */
}

.description h4 {
    text-transform: uppercase; /* Transforms text to uppercase */
}

input {
    display: none; /* Hides input */
}

input:checked + label {
    width: 600px; /* Changes width when input is checked */
}

input:checked + label .description {
    opacity: 1 !important; /* Changes opacity when input is checked */
    transform: translateY(0) !important; /* Transforms when input is checked */
}

.card[for="c1"] {
    background-image: url('./img1.jpeg'); /* Sets background image for card 1 */
}
.card[for="c2"] {
    background-image: url('./img2.jpeg'); /* Sets background image for card 2 */
}
.card[for="c3"] {
    background-image: url('./img3.jpeg'); /* Sets background image for card 3 */
}
.card[for="c4"] {
    background-image: url('./img4.jpeg'); /* Sets background image for card 4 */
} 
## React documents
### Addpost
import React, { useState } from 'react';
import firestore from './firebase-config'; // Update import statement

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
### App
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Posts from './Posts';
import AddPost from './AddPost';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Simple Blog App</h1>
          <AddPost />
          <Posts />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
### firebase config js
/* global firestore */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKmIYpGsECuv6dhH95MfTXicBGHCuToOc",
  authDomain: "new-project-5f89b.firebaseapp.com",
  projectId: "new-project-5f89b",
  storageBucket: "new-project-5f89b.appspot.com",
  messagingSenderId: "839417887319",
  appId: "1:839417887319:web:19adbe9618d17da53f0112",
  measurementId: "G-QQW70GMPFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
### Posts js
import React, { useEffect, useState } from 'react';
import firestore from './firebase-config'; // Update import statement

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

these are the files i made changes to for the react js tutorial