## Asteroids-Front

This is a sample React project that combines the following technologies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [Axios](https://github.com/axios/axios): A promise-based HTTP client for making HTTP requests from the browser.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): A routing library for React applications.

## Requirements

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system.

## Installation

1. Clone this repository or download the source code:

   ```shell
   git clone https://github.com/jadueno/asteroids-front.git
   ```

2. Navigate to the project directory:

   ```shell
   cd asteroids-front
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   ```

2. The application will be accessible at [http://localhost:3000](http://localhost:3000).

3. You can modify the React components, styles using Tailwind CSS, and make HTTP requests using Axios as needed for your project.

## Routing with react-router-dom

This project uses `react-router-dom` for client-side routing. You can define routes in the `src/App.js` file using `Route` components.

```javascript
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}
```

## Customization

- Customize the Tailwind CSS styles in the `src/index.css` file.

- Modify and extend React components in the `src/components` directory as per your project requirements.
