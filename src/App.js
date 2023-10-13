import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProDetails from "./components/ProDetails";
import Cart from "./components/Cart";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/prodetails"
            element={
              <PrivateRoute>
                <NavBar />
                <ProDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <NavBar />
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path="/electronics"
            element={
              <PrivateRoute>
                <NavBar />
                <Electronics />
              </PrivateRoute>
            }
          />
          <Route
            path="/jewelery"
            element={
              <PrivateRoute>
                <NavBar />
                <Jewelery />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
