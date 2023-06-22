// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Activation from "./components/auth/Activation";
import Profile from "./components/auth/Profile";
import UpdateProfile from "./components/auth/UpdateProfile";
import TripList from "./components/trips/TripList";
import TripDetail from "./components/trips/TripDetail";
import CreateTrip from "./components/trips/CreateTrip";
import EditTrip from "./components/trips/EditTrip";
import DeleteTrip from "./components/trips/DeleteTrip";
import CommentList from "./components/comments/CommentList";
import CreateComment from "./components/comments/CreateComment";
import VoteList from "./components/votes/VoteList";
import CreateVote from "./components/votes/CreateVote";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={TripList} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/activate/:activationCode" component={Activation} />
          <Route path="/profile" component={Profile} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/trips/:id" component={TripDetail} />
          <Route path="/create-trip" component={CreateTrip} />
          <Route path="/edit-trip/:id" component={EditTrip} />
          <Route path="/delete-trip/:id" component={DeleteTrip} />
          <Route path="/comments/:id" component={CommentList} />
          <Route path="/create-comment/:id" component={CreateComment} />
          <Route path="/votes/:id" component={VoteList} />
          <Route path="/create-vote/:id" component={CreateVote} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
