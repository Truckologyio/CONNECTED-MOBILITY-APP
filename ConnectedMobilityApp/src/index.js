import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify'; // Import Amplify correctly
import awsconfig from './aws-exports';

// Configure Amplify
Amplify.configure(awsconfig);

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance
reportWebVitals();



