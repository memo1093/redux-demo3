import React from "react";
import {BrowserRouter as Router,Redirect,Route,  Switch } from "react-router-dom";
import "./App.css";
import AddPostForm from "./features/AddPostForm";
import EditPostForm from "./features/EditPostForm";
import Navbar from "./features/Navbar/Navbar";
import PostsList from "./features/PostsList";
import SinglePostPage  from "./features/SinglePostPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <AddPostForm />
              <PostsList />
            </React.Fragment>
            
          )}/>
          <Route exact path="/posts/:postId" component = {SinglePostPage}/> 
          <Route exact path="/editPost/:postId" component={EditPostForm}/>
            <Redirect to="/"/>
      </Switch>
    </Router>
  );
}
/*https://redux.js.org/tutorials/essentials/part-4-using-data#preparing-action-payloads*/

export default App;
