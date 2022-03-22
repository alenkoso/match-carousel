# Match Carousel

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

1. Run `npm install`
2. Run `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Component usage example

In the `App.js` component we return a `MatchCarousel` component, which contains two parameters:

- `sportId` - Integer -  display only matches for a particular sport. 1 - 31.
- `championshipId `- Integer - 

##### Not implemented

- `max` - Integer - maximum number of matches displayed in a carousel. Defaults to 10.
- `sportId` - I did not implement the default value.

### Usage

`<MatchCarousel sportId={0} championshipId={0} />`

## Project structure

- `/src` - Our project source folder.
  - `/src/assets/backgrounds` - Folder with three background images provided.
  - `/src/data` - A folder containing our prettified JSON file, which we downloaded from the API.
  - `/src/components` - A folder containing all components used in our app.
    - `/src/components/Card.js` – The card component, which displays the data of  single match  
    - `/src/components/Card.css` – Style for Card component. 
    - `/src/components/MatchCarousel.js` – Carousel component which fetches  the data and displays the carousel made of Card components.
    - `/src/components/App.js` - Application root.
- `notes.txt` - Contains a list of all relevant files/folders in the `/src/` folder and dependencies in `package.json`file with a short description. It also contains a brief explanation of known issues and future optimizations.
- `notes-optimization.txt` - Ideas for Assignment 3.

## Documentation

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Material used:

- Setting a background image from my /backgrounds folder: https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
- Conditional rendering: https://reactjs.org/docs/conditional-rendering.html
- Components and props: https://reactjs.org/docs/components-and-props.html
- Responsive design: 
  - https://www.w3schools.com/howto/howto_css_responsive_text.asp
  - https://www.w3schools.com/howto/howto_css_image_responsive.asp
  - https://www.w3schools.com/css/css_rwd_intro.asp
- CSS design: 
  - https://www.geeksforgeeks.org/how-to-darken-an-image-using-css/
  - https://www.w3schools.com/cssref/css3_pr_filter.asp
  - https://stackoverflow.com/questions/4564916/nesting-css-classes

## Additional components used


### React Responsive Carousel
More info on the component used can be found here: https://www.npmjs.com/package/react-responsive-carousel
