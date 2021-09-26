import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';

// import { Login } from './User';

const App = () => {
  return (
    <div>
      <h1> Un petit entraînement, qui sera enrichi au fure et à mesure</h1>
      <Header />
      {/* <Login /> */}
    </div>
  );
};

export default App;

