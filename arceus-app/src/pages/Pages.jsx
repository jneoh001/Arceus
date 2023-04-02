import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import HistoryPage from "./HistoryPage/HistoryPage";
import GoalPage from "./GoalPage/GoalPage";
import LoginPage from "./LoginPage/LoginPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import IndividualRecipePage from "./IndividualRecipePage/IndividualRecipePage";
import AddReviewPage from "./AddReviewPage/AddReviewPage";
import ViewReviewPage from "./ViewReviewPage/ViewReviewPage";
import RecipeSearchPage from "./RecipeSearchPage/RecipeSearchPage";
import EditProfilePage from "./EditProfilePage/EditProfilePage";
import Searched from "./RecipeSearchPage/Searched";
import HomePage from "./HomePage/HomePage";
import { useAuth } from "../store/auth-context";
import ForgetPasswordPage from "./ForgetPasswordPage/ForgetPasswordPage";
import ReviewConfirmPage from "./AddReviewPage/ReviewConfirmPage";

function Pages(){
  const {currentUser} = useAuth();
    return(
        <Routes>
            <Route path="/" element={currentUser?<ProtectedRoute><HomePage/></ProtectedRoute>:<LandingPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/password-reset" element={<ForgetPasswordPage/>} />
            <Route path="/register" element={<RegistrationPage/>} />
            <Route path="/history" element={<ProtectedRoute><HistoryPage/></ProtectedRoute>} />
            <Route path="/goals" element={<ProtectedRoute><GoalPage/></ProtectedRoute>}/>
            <Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
            <Route path="/editprofile" element={<ProtectedRoute><EditProfilePage/></ProtectedRoute>}/>
            <Route path="/search" element={<ProtectedRoute><RecipeSearchPage/></ProtectedRoute>}/>
            <Route path="/searched/:search" element={<ProtectedRoute><Searched/></ProtectedRoute>}/>
            <Route path="/recipes/:id" element={<ProtectedRoute><IndividualRecipePage /></ProtectedRoute>}/>
            <Route path="/add-reviews/:id" element={<ProtectedRoute><AddReviewPage/></ProtectedRoute>}/>
            <Route path="/add-reviews/:id/confirm" element={<ProtectedRoute><ReviewConfirmPage /></ProtectedRoute>}/>
            <Route path="/view-reviews/:id" element={<ProtectedRoute><ViewReviewPage/></ProtectedRoute>}/>
        </Routes>
    );
};
export default Pages;
