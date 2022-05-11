import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Security/Login";
import Signup from "./components/Security/signup";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Security/Profile";
import Footer from "./components/Footer";
import Chat from "./layout/Chat/Chat";

import searchProfile from "./components/SearchProfile";

import "./App.css";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ApolloProvider client={client}>
    <Router>
      {load ? (
        <Preloader load={load} />
      ) : (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profiles/:profileId" component={Profile} />
            <Route path="/searchProfile" component={searchProfile} />
            <Route path="/chat" component={Chat} />

          </Switch>
          <Footer />
        </div>
      )}
    </Router>
    </ApolloProvider>
  );
}

export default App;
