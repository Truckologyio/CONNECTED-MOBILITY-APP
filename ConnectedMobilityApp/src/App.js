import React from 'react';
import './App.css';
import { DataStore } from '@aws-amplify/datastore'; // Update the import path to use '@aws-amplify/datastore'
import { User } from './models/User';

function App() {
  async function addUser() {
    try {
      const newUser = await DataStore.save(
        new User({
          name: "Lorem ipsum dolor sit amet",
          username: "Lorem ipsum dolor sit amet",
          email: "Lorem ipsum dolor sit amet",
          password: "Lorem ipsum dolor sit amet",
          licenseNumber: "Lorem ipsum dolor sit amet",
          cdlEndorsement: "Lorem ipsum dolor sit amet",
          issuedState: "Lorem ipsum dolor sit amet",
          issueDate: "Lorem ipsum dolor sit amet",
          expDate: "Lorem ipsum dolor sit amet"
        })
      );
      console.log("New user created:", newUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addUser}>Add User</button>
      </header>
    </div>
  );
}

export default App;


