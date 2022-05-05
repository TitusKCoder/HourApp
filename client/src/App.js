import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Profile from './pages/Profile'; 
import About from './pages/About';
import Home from './pages/Home';
import Connect from './pages/Connect';
import Login from './pages/Login';
import Signup from './pages/Signup';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
return (
<ApolloProvider client={client}>
    <Router>
        <Header/>
        <Routes>
            <Route
                path="/"
                element={<Home/>}
            />
            <Route
                path="/Connect"
                element={<Connect/>}
            />
            <Route
                path="/Profile"
                element={<Profile/>}
            />
            

            
        </Routes>
    </Router>
</ApolloProvider>

)
} 

<LandingPage />;
export default App;
