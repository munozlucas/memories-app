import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {

  //todo getauthdata
 
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
