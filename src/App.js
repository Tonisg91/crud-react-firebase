import React from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';

import Links from './components/Links';

import 'react-toastify/dist/ReactToastify.css';


function App() {



  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <Links />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
