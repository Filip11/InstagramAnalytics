import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


const user = {
  firstName: "John",
  lastName: "Doe"
}
const element = <p>Hello, {user.firstName} {user.lastName} {7-8}</p>

ReactDOM.render(<App/>, document.getElementById('root'));
