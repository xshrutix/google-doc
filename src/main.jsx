// Import the necessary libraries
import React from 'react' // The core React library
import ReactDOM from 'react-dom/client' // React DOM for web-based apps
import App from './App.jsx' // The main App component for your application
import './index.css' // CSS styles for your application

// Create a new root React node on the element with id 'root', and render the App component into it
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode is a wrapper component that checks for potential problems in the app during development
  <React.StrictMode>
    {/* Render the main application component */}
    <App />
  </React.StrictMode>,
)
