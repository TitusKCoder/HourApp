require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const {authMiddleware} = require('./utils/auth');
var cookieParser = require('cookie-parser');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./schemas/config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const bcrypt = require('bcryptjs');
const { default: mongoose } = require('mongoose');
const salt = 10;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: authMiddleware
});

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// create instance of Apollo server with GQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  // starts server 
  startApolloServer(typeDefs, resolvers);

  //as of 5/7 at 130pm
