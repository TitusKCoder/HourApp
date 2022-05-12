import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



// import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/RegisterPage";
import DashboardPage from "./components/pages/DahboardPage/DashboardPage";
import IndexPage from "./components/pages/IndexPage";
import ChatroomPage from "./components/pages/chatroom/ChatroomPage";
// import io from "socket.io-client";
// import makeToast from "./Toaster";


const httpLink = createHttpLink({
    uri: '/graphql'
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
            <Route path="/" component={IndexPage} exact />

         <Route
         Redirect from="/Login" to="/RegisterPage" />
         <Route>
           <RegisterPage />
         </Route>
         <Route
         Redirect from="/Login" to="/RegisterPage" />
<Route>
  <RegisterPage />
</Route>

<Route
         Redirect from="/dashboard" to="/dashboardPage" />
<Route>
  <DashboardPage />
</Route>
<Route
      exact path="/chatroom/:id" />
<Route>
  <ChatroomPage />
</Route>
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  </ApolloProvider>
  
  );
}

export default App;
