import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, BrowserRouter } from "react-router-dom";
import { withCookies, CookiesProvider } from "react-cookie";
import SignIn from "./components/Signin";
import Course from "./components/Course";
import Dashboard from "./components/Dashbord";
import TestAppWithRouter from "./components/TestApp";
import Module from "./components/Module";
import Discussion from "./components/Discussion";
import Session from "./components/Session";
import Segment from "./components/Segment";
import Assessment from "./components/Assessment";
import Resource from "./components/Resource";
import Profile from "./components/Profile";
import Score from "./components/Score";
import Calendar from "./components/Calendar";
import Question from "./components/Question";
import StudentDirectory from "./components/Student_directory";
function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/courses" component={Course} />
        <Route exact path="/course/:courseId/dashboard" component={Dashboard} />
        <Route
          exact
          path="/course/:courseId/dashboard/student-directory"
          component={StudentDirectory}
        />
        <Route exact path="/course/:courseId/grades" component={Score} />
        <Route exact path="/course/:courseId/module" component={Module} />
        <Route exact path="/course/:courseId/calendar" component={Calendar} />
        <Route
          exact
          path="/course/:courseId/discussion"
          component={Discussion}
        />
        <Route
          exact
          path="/course/:courseId/discussion/question"
          component={Question}
        />
        <Route
          exact
          path="/course/:courseId/module/:moduleId/session"
          component={Session}
        />
        <Route exact path="/course/:courseId/profile" component={Profile} />

        <Route
          exact
          path="/course/:courseId/session/:sessionId/segment/:segmentId"
          component={Segment}
        />
        <Route
          exact
          path="/course/:courseId/module/:moduleId/assessment/:assessmentId"
          component={Assessment}
        />
        <Route
          exact
          path="/course/:courseId/module/:moduleId/resource/:resourceId"
          component={Resource}
        />
        <Route exact path="/test" component={TestAppWithRouter} />
      </CookiesProvider>
    </BrowserRouter>
  );
}
export default withCookies(App);
