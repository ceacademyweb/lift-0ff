import { createBrowserRouter } from "react-router-dom"
import AppTemplate from "../components/templates/AppTemplate";
import Login from "../components/pages/Login";
import Video from "../components/pages/Video";
import Home from "../components/pages/Home";
// import Video1 from "../components/pages/Video1";
import Journal from "../components/pages/Journal";
import Register from "../components/pages/Register";
import AdminTemplate from "../components/templates/AdminTemplate";
import Rating from "../components/pages/Rating";
import JournalQualification1 from "../components/pages/JournalQualification1";
import JournalNew from "../components/pages/JournalNew";
import React from "react";
import JournalUser from "../components/pages/JournalUser";
import JournalAdmin from "../components/pages/JournalAdmin";
import JournalsUser from "../components/pages/JournalsUser";
import BlankTemplate from "../components/templates/BlankTemplate";
// @ts-ignore
const Router = createBrowserRouter([
  {
    path: "/",
    // element: <AppTemplate/>,
    element: <BlankTemplate/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/video/fase/:fase/:id",
        element: <Video/>
      },
      {
        path: "/journal",
        element: <JournalsUser/>
      },
      {
        path: "/journal/:id",
        element: <JournalUser/>
      }

    ]
  },
  {
    path: "/login",
    // element: <Login/>
    element: <BlankTemplate/>,
  },
  {
    path: "/registro",
    // element: <Register/>
    element: <BlankTemplate/>,
  },
  {
    path: "/admin",
    // element: <AdminTemplate/>,
    element: <BlankTemplate/>,
    children: [
      {
        path: "/admin/calificacion",
        element: <Rating/>
      },
      {
        path: "/admin/calificacion/:id",
        // @ts-ignore
        element: <JournalAdmin/>
      },
    ]
  }
])

export default Router
