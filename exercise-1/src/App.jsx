import React from "react";

export const userData = {
  firstName: "Reaseychanbopich", // feel free to replace the name value
  lastName: "Soeum", // feel free to replace the name value
  title: "One peice enjoyer", // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>TODO: {userData.firstName} {userData.lastName}</h2>
      <p>TODO: {userData.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
