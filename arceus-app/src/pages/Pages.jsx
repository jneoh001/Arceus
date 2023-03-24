import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import HistoryPage from "./HistoryPage/HistoryPage";
import GoalPage from "./GoalPage/GoalPage";
import LoginPage from "./LoginPage/LoginPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import IndividualReviewPage from "./IndividualReviewPage/IndividualReviewPage";
import IndividualRecipePage from "./IndividualRecipePage/IndividualRecipePage";
import RecipeSearchPage from "./RecipeSearchPage/RecipeSearchPage";
import RecommendedRecipePage from "./RecommendedRecipePage/RecommendedRecipePage";
import EditProfilePage from "./EditProfilePage/EditProfilePage";
import Searched from "./RecipeSearchPage/Searched";
import HomePage from "./HomePage/Homepage";
import { useAuth } from "../store/auth-context";

function Pages(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegistrationPage/>} />
            <Route path="/history" element={<ProtectedRoute><HistoryPage/></ProtectedRoute>} />
            <Route path="/goals" element={<ProtectedRoute><GoalPage/></ProtectedRoute>}/>
            <Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
            <Route path="/recommended" element={<ProtectedRoute><RecommendedRecipePage/></ProtectedRoute>}/>
            <Route path="/editprofile" element={<ProtectedRoute><EditProfilePage/></ProtectedRoute>}/>
            <Route path="/search" element={<ProtectedRoute><RecipeSearchPage/></ProtectedRoute>}/>
            <Route path="/searched/:search" element={<ProtectedRoute><Searched/></ProtectedRoute>}/>
            <Route path="/recipe/:id" element={<ProtectedRoute><IndividualRecipePage/></ProtectedRoute>}/>
            <Route path="/reviews/:recipe" element={<ProtectedRoute><IndividualReviewPage/></ProtectedRoute>}/>
        </Routes>
    );
};
export default Pages;
