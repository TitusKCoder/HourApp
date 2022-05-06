import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/pages/Profile'; 
import About from './components/pages/About';
import LandingPage from './components/LandingPage';
import Connect from './components/pages/Connect';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
return (
<ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<LandingPage/>}
                    />
                    <Route
                        path="/Connect"
                        element={<Connect/>}
                    />
                    <Route
                        path="/Profile"
                        element={<Profile/>}
                    />
                    <Route 
                        path="/Login"
                        element={<Login/>}
                    />
                    <Route
                        path="/Signup"
                        element={<Signup/>}
                    />
                    <Route
                        path="/About"
                        element={<About/>}
                    />
                </Routes>            
            </Router>
        <Footer/>
</ApolloProvider>

)
} 
// eslint-disable-next-line
{/* <LandingPage />; */}
export default App;
