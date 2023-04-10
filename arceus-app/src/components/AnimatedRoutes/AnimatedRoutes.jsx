import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/Landingpage";
import HistoryPage from "../../pages/HistoryPage/HistoryPage";
import AccountPage from "../../pages/AccountPage/AccountPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import IndividualRecipePage from "../../pages/IndividualRecipePage/IndividualRecipePage";
import AddReviewPage from "../../pages/AddReviewPage/AddReviewPage";
import ViewReviewPage from "../../pages/ViewReviewPage/ViewReviewPage";
import RecipeSearchPage from "../../pages/RecipeSearchPage/RecipeSearchPage";
import EditProfilePage from "../../pages/EditProfilePage/EditProfilePage";
import Searched from "../../pages/RecipeSearchPage/Searched";
import ForgetPasswordPage from "../../pages/ForgetPasswordPage/ForgetPasswordPage";
import ReviewConfirmPage from "../../pages/AddReviewPage/ReviewConfirmPage";
import HomePage from "../../pages/HomePage/HomePage";
import { useAuth } from "../../store/auth-context";

// Framer Motion Imports
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  const currentUser = useAuth();
  console.log("Current User is Logged In?");
  console.log(currentUser.isLoggedIn);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            currentUser.isLoggedIn ? (
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password-reset" element={<ForgetPasswordPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editprofile"
          element={
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <RecipeSearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/searched/:search"
          element={
            <ProtectedRoute>
              <Searched />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <ProtectedRoute>
              <IndividualRecipePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-reviews/:id"
          element={
            <ProtectedRoute>
              <AddReviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-reviews/:id/confirm"
          element={
            <ProtectedRoute>
              <ReviewConfirmPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-reviews/:id"
          element={
            <ProtectedRoute>
              <ViewReviewPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
