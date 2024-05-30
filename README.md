# ReactMastery

Welcome to **ReactMastery**, a comprehensive project designed to help you master React.js through hands-on learning and practical application. This repository serves as a learning path for developers of all skill levels to deepen their understanding of React.js, covering everything from basic concepts to advanced techniques.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tutorials](#tutorials)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Continuous Integration](#continuous-integration)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## Introduction

ReactMastery is designed to guide you through the process of learning React.js, a popular JavaScript library for building user interfaces. 
It allows us to build user interfaces and frontends of websites and applications using components. It was created by Facebook.

By following the tutorials and building the sample projects in this repository, you will gain practical experience and develop a solid understanding of React.js fundamentals and best practices.

React uses something called the Virtual DOM to make updates faster. The Virtual DOM is like a lightweight copy of the real DOM (the structure of your web page). When something changes in your React app, React updates the Virtual DOM first. Then, it compares this updated Virtual DOM with the real DOM to see what has changed. Finally, React only updates the parts of the real DOM that need to change. This makes your app faster and more efficient.

<img src="https://github.com/potatoscript/MyDocuments/blob/main/virtual_dom.png?raw=true" />

A component is a reusable piece of code that can be used to build elements on a web page.

Components are like custom HTML elements, and they can be broken down into smaller components. This process is called composition. Composition is great for building user interfaces because it allows you to break down complex interfaces into smaller, more manageable pieces, making your code easier to maintain and scale. Components can be either classes or functions. However, class-based components are the older way of doing things in React. Nowadays, most components are functional.

Components can also take in props, which are like arguments or attributes. They can also hold their own state or data.

State represents the data that a component manages internally. It allows components to store and manage their own data, which can change over time in response to user interactions or other factors. State is typically used for data that is expected to change, such as user input, fetched data, or UI-related data like whether a modal is open or closed.

In functional components, you can define state using a hook called useState. This hook returns an array with two elements: the current state value and a function to update that state.

Global state relates to data that is shared across the entire app, not just a single component. For example, data fetched from a database that needs to be shared with multiple components. There are several ways to manage global state, such as keeping it in a main component and passing it down to child components, or using the React Context API.

## Getting Started

To get started with ReactMastery, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/potatoscript/ReactMastery.git
cd ReactMastery
npm install
```

## Project Structure

The project is organized into several directories, each focusing on different aspects of React.js:

- **/basic-concepts**: Tutorials and examples covering the basics of React.js.
- **/intermediate**: More advanced topics and projects.
- **/advanced**: In-depth tutorials on complex concepts and best practices.
- **/tests**: Unit and integration tests for the various components and projects.

## Tutorials

### Basic Concepts

1. **Hello World**: Learn how to create your first React component.
2. **JSX and Rendering Elements**: Understand JSX syntax and how React renders elements.
3. **Components and Props**: Dive into React components and passing data with props.
4. **State and Lifecycle**: Manage state within components and understand component lifecycle methods.

### Intermediate

1. **Handling Events**: Learn how to handle user events in React.
2. **Conditional Rendering**: Implement conditional rendering in your components.
3. **Lists and Keys**: Work with lists and keys in React.
4. **Forms**: Build and manage forms in React applications.

### Advanced

1. **Hooks**: Understand and use React hooks for state and side effects.
2. **Context API**: Manage global state with the Context API.
3. **Performance Optimization**: Optimize the performance of your React applications.
4. **Routing**: Implement routing with React Router.

## Running the Project

To run the project locally, use the following command:

```bash
npm start
```

This will start the development server and open the project in your default browser. You can then begin exploring and modifying the code as you learn.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the test suite and provide feedback on the functionality of your components.

## Continuous Integration

This project uses GitHub Actions for continuous integration. The workflow file located at `.github/workflows/ci.yml` ensures that all tests are run on every push and pull request to the `main` branch.


## Setting up GitHub Pages:

### Adjust the Path and Configuration

1. **Update Paths in `index.html`**:
   Since your `index.html` is within the `docs` directory, the paths to your assets need to be relative to that directory.

2. **Ensure Correct Build Output**:
   Make sure Vite is configured to output to the `docs` directory.

### Update `vite.config.js`

Ensure your `vite.config.js` includes the correct base path and output directory:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'docs',
  },
  base: '/ReactMastery/', // Set this to your repository name
})
```

### Update `index.html`

Adjust the paths in `index.html` to ensure they are correctly referenced relative to the `docs` directory:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Potato Skills</title>
  </head>
  <body>
    <div id="root">abc</div>
    <script type="module" src="./src/main.jsx"></script>
  </body>
</html>
```

### Build and Deploy

1. **Build Your Project**:
   Run the build command to generate the `docs` folder with your built project:
   ```sh
   npm run build
   ```

2. **Push to GitHub**:
   Ensure the `docs` folder and all necessary files are committed and pushed to your GitHub repository:
   ```sh
   git add docs
   git commit -m "Add built project"
   git push origin main
   ```

### Verify GitHub Pages Settings

1. Go to your repository on GitHub.
2. Click on **Settings**.
3. Scroll down to the **GitHub Pages** section.
4. Under **Source**, select the `main` branch and `/docs` folder.
5. Save your settings.

### Check Your GitHub Pages URL

Navigate to `https://<your-username>.github.io/<repository-name>/` to see if your GitHub Pages site is correctly displaying the content from `main.jsx`.

If these steps are followed correctly, your GitHub Pages should load the `index.html` from the `docs` directory and correctly display the content from `main.jsx`.


## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request. Please refer to the [contributing guidelines](CONTRIBUTING.md) for more information.

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React](https://react.dev/)
- [JavaScript Info](https://javascript.info/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
