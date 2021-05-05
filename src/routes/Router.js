import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import AddressPage from "../pages/AddressPage/AddressPage";
import Header from "../components/Header";
import EditAddressPage from "../pages/EditAddressPage/EditAddress"
import EditProfilePage from "../pages/EditProfilePage/EditProfile"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <Header />
          <SignUpPage />
        </Route>
        <Route exact path="/address">
          <Header />
          <AddressPage />
        </Route>
        <Route exact path="/edit-profile">
          <Header />
          <EditProfilePage />
        </Route>  
        <Route exact path="/edit-address">
          <Header />
          <EditAddressPage />
        </Route>
        <Route exact path="/profile">
          <Header />
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route exact path="/restaurant/:id">
          <Header />
          <RestaurantPage />
        </Route>
        <Route exact path="/cart">
          <Header />
          <CartPage />
        </Route>
        <Route>
          <Header />
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
