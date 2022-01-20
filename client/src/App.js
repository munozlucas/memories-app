import React from "react";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  //todo getauthdata

  const user = useSelector((state) => state.auth.authData);

  return (
    <BrowserRouter>
      <Container maxwidth="xl">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route exact path="/auth" element={user ? <Navigate to="/posts" /> : <Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
