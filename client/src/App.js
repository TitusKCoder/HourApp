import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Profile from './components/pages/Profile'; 
import About from './components/pages/About';
import LandingPage from './components/LandingPage';
import Connect from './components/pages/Connect';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

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
    console.log(`ENV TEST is ${process.env.REACT_APP_TEST}`)
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
