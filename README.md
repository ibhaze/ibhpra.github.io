# THE FIRST DEVELOPMENT ASSIGNMENT 
The first development assignment we had was the node.js assignment that helped me to understand the basics of node.js 
....// index.js
const oneLinerJoke = require('one-liner-joke');
// Get a random joke
const getRandomJoke = oneLinerJoke.getRandomJoke();
// Log the joke to the 
console.log(getRandomJoke.body);

## MY CSS 
/* Resetting default margin and padding for all elements */
* {
  margin: 0;
  padding: 0;
}

/* Styling for the body */
body {
  padding: 0;
  background-color: #090909; /* Sets the background color of the body */
  font-family: 'Roboto', sans-serif; /* Applies the Roboto font family to the body text */
  color: white; /* Sets the color of the body text */
  overflow-y: scroll; /* Ensures vertical scrollbar is always visible */
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
  width: 80px; /* Sets the width of the logo */
}

/* Styling for text with a stroke effect */
.stroke-text {
  font-size: 30px; /* Sets the font size of the text */
  color: black; /* Sets the color of the text */
  -webkit-text-stroke: 1px white; /* Applies a white stroke to the text for WebKit browsers */
}

/* Styling for the navbar */
.navbar {
  position: fixed; /* Fixes the navbar position on the viewport */
  top: 0; /* Aligns the navbar to the top of the viewport */
  width: 100%; /* Sets the navbar width to 100% of the viewport */
  height: 65px; /* Sets the height of the navbar */
  display: flex; /* Uses flexbox for layout */
  align-items: center; /* Aligns items vertically in the center */
  padding-top: 10px; /* Adds padding to the top of the navbar */
  z-index: 1000; /* Sets the stacking order of the navbar */
  background-color: #090909; /* Sets the background color of the navbar */
  color: white; /* Sets the color of the text in the navbar */
}

/* Styling for list items in the navbar */
.navbar li {
  list-style: none; /* Removes the default list styling */
  margin: 0 15px; /* Adds margin around each list item */
}

/* Margin adjustment for the first list item in the navbar */
.navbar li:first-child {
  margin-right: auto; /* Aligns the first list item to the left and pushes the rest to the right */
}

/* Styling for links in the navbar */
.navbar li a {
  text-decoration: none; /* Removes underline from links */
  color: white; /* Sets the color of the links */
  position: relative; /* Sets the position of the links relative to their normal position */
}

/* Styling for the underline effect on navbar link hover */
.navbar li a:hover::after {
  content: ''; /* Adds a pseudo-element after the link */
  position: absolute; /* Positions the pseudo-element absolutely */
  left: 0; /* Aligns the pseudo-element to the left edge of the link */
  bottom: -3px; /* Sets the distance of the pseudo-element from the bottom of the link */
  width: 100%; /* Sets the width of the pseudo-element to match the link */
  height: 2px; /* Sets the height of the pseudo-element */
  background-color: white; /* Sets the color of the pseudo-element */
}

/* Styling for the main content */
main {
  margin-top: 150px; /* Adds margin space on top of the main content */
}

/* Styling for the container */
.container {
  display: grid; /* Uses CSS Grid for layout */
  grid-template-columns: 1fr auto 1fr; /* Defines three columns with equal widths */
  grid-gap: 20px; /* Adds gap between grid items */
  justify-items: center; /* Aligns items in the center horizontally */
  align-items: start; /* Aligns items at the start of the container vertically */
  font-weight: 20; /* Sets the font weight (likely an error, should be a numeric value) */
}

/* Styling for the left column */
.left-column {
  grid-column: 1; /* Sets the left column to span the first grid column */
  text-align: right; /* Aligns text to the right within the column */
}

/* Styling for the right column */
.right-column {
  grid-column: 3; /* Sets the right column to span the third grid column */
  margin-top: 40px; /* Adds margin space on top of the column */
  text-align: left; /* Aligns text to the left within the column */
}

/* Styling for both left and right columns */
.left-column,
.right-column {
  max-width: 300px; /* Sets the maximum width for both columns */
}

/* Styling for the image container */
.image-container {
  grid-column: 2; /* Sets the image container to span the second grid column */
  position: relative; /* Makes the image container a positioned parent for its children */
}

/* Styling for the centered image */
.centeredimg {
  width: 370px; /* Sets the width of the image */
  height: auto; /* Automatically adjusts the height to maintain aspect ratio */
}

/* Styling for the ABOUT heading */
.about-heading {
  position: absolute; /* Positions the ABOUT heading absolutely */
  bottom: -180px; /* Positions the heading 180px above the bottom of its containing block */
  left: 30%; /* Positions the heading 30% from the left edge of its containing block */
  transform: translateX(-50%); /* Centers the heading horizontally */
  font-size: 220px; /* Sets the font size of the heading */
  font-weight: 220; /* Sets the font weight (likely an error, should be a numeric value) */
  z-index: -1; /* Sets the stacking order of the heading */
}

/* Styling for icons */
.icons {
  width: 20px; /* Sets the width of the icons */
}

/* Styling for the footer */
footer {
  position: fixed; /* Positions the footer fixed to the viewport */
  bottom: 20px; /* Positions the footer 20px from the bottom of the viewport */
  right: 20px; /* Positions the footer 20px from the right edge of the viewport */
}

/* Styling for links within the footer */
footer a {
  display: block; /* Displays links as block elements */
}

/* Media query for smaller screens */
@media only screen and (max-width: 768px) {
  /* Adjustments for the navbar */
  .navbar {
    height: auto; /* Allows navbar height to adjust automatically */
    flex-direction: column; /* Stacks navbar items vertically */
    justify-content: center; /* Centers navbar items vertically */
    padding-top: 0; /* Removes top padding from the navbar */
  }

  /* Margin adjustment for list items in the navbar */
  .navbar li {
    margin: 10px 0; /* Adds vertical margin to navbar items */
  }

  /* Adjustments for the container */
  .container {
    grid-template-columns: 1fr; /* Displays one column in the container */
  }

  /* Adjustments for the ABOUT heading */
  .about-heading {
    font-size: 120px; /* Decreases font size of the ABOUT heading */
    bottom: -120px; /* Adjusts position of the heading */
  }

  /* Margin adjustment for the main content */
  main {
    margin-top: 370px; /* Adjusts margin space on top of the main content */
  }
}

/* Media query for larger screens */
@media only screen and (min-width: 1200px) {
  /* Adjustments for the container */
  .container {
    grid-template-columns: repeat(3, 1fr); /* Displays three columns in the container */
  }
}
