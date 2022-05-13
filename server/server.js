require('dotenv').config();
const express = require('express');

const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const {authMiddleware} = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./schemas/config/connection');


const PORT = process.env.PORT || 3001;


const app = express();

// This `app` is the returned value from `express()`.

// Creating the WebSocket server

// Hand in the schema we just created and have the
// WebSocketServer start listening.


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {authMiddleware},
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname, 'dist')));}


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
