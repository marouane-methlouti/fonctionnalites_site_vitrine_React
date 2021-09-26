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
      <Header />
      {/* <Login /> */}
    </div>
  );
};

export default App;

