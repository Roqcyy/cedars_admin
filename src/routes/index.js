import React from "react"
import { Navigate } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import OrderTable from "pages/Tables/OrderTable"

// User Management
import UserSearch from "pages/UserManagement/UserSearch"
import SellerRegistration from "pages/UserManagement/SellerRegistration"
import Qna from "pages/UserManagement/Qna"
import QnaDetail from "pages/UserManagement/Qna/Detail"
import Review from "pages/UserManagement/Review"
import ReviewDetail from "pages/UserManagement/Review/Detail"

// Menu Management
import MenuManagement from "pages/MenuManagement"
import Home from "pages/Home/Home"
// Dashboard
import Dashboard from "../pages/Dashboard/index"

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard/> },
  // table 
  { path: "/orderTable", component: <OrderTable/> },
   
  // home 
  {path: "/home", component: <Home/> },
  //User Management
  { path: "/user-management/search", component: <UserSearch/> },
  { path: "/user-management/seller-reg", component: <SellerRegistration/> },
  { path: "/user-management/qna", component: <Qna/> },
  { path: "/user-management/qna/detail", component: <QnaDetail/> },
  { path: "/user-management/review", component: <Review/> },
  { path: "/user-management/review/detail", component: <ReviewDetail/> },
  //Menu Management
  
  { path: "/menu-management", component: <MenuManagement/> },

  // //profile
  { path: "/profile", component: <UserProfile/> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
   {
    path: "/",
    exact: true,
    component: < Navigate to="/dashboard" />,
  },
]

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
]

export { authProtectedRoutes, publicRoutes }

