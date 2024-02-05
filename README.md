# Rating Popup

A simple React component for collecting user ratings with a customizable and interactive design. This project provides an easy-to-use popup with rating buttons and allows users to submit their feedback.

![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF)
![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


## Installation

To install the project dependencies, use either yarn or npm:

```bash
# Using yarn
yarn install

# Using npm
npm install
```

## Usage

1.Import the RatingPopup component into your React application.

```bash
import RatingPopup from 'ratingpopup';
```

2.Use the RatingPopup component in your JSX.

```bash
function App() {
  return (
    <div>
      {/* Your existing components */}
      <RatingPopup />
    </div>
  );
}
```

Visit http://localhost:3000 to view the application.

## Scripts

The project includes the following scripts:

start: Start the development server.<br>
build: Build the application for production.<br>
test: Run tests using Jest.<br>
predeploy: Triggered before deploying, runs the build script.<br>
deploy: Deploy the application using gh-pages.<br>

To run these scripts, you can use either yarn or npm :

```bash
# Using yarn
yarn <script-name>

# Using npm
npm run <script-name>
```

Dependencies
The project relies on the following dependencies:

@reduxjs/toolkit: State management library for React applications.<br>
react: JavaScript library for building user interfaces.<br>
react-dom: React package for working with the DOM.<br>
react-redux: Official React bindings for Redux.<br>
redux: State container for JavaScript applications.<br>
semantic-ui-css: CSS files for Semantic UI styling.<br>
semantic-ui-react: React components for Semantic UI.<br>
gh-pages: Deployment tool for publishing GitHub Pages.<br>

Make sure to install these dependencies before running the application.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



Contributing
Feel free to contribute to the project. If you find any issues or have suggestions, please create an issue or submit a pull request.

