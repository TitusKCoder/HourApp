require('dotenv').config();
const express = require('express');

const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const {authMiddleware} = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./schemas/config/connection');

const {createServer} = require('http');
const {ApolloServerPluginDrainHttpServer} = require('apollo-server-core');
const {makeExecutableSchema} = require('@graphql-tools/schema');
const {WebSocketServer} = require('ws');
const {useServer} = require('graphql-ws/lib/use/ws');

const {GooglePubSub} = require('@axelspringer/graphql-google-pubsub');
const pubsub = new GooglePubSub();

const PORT = process.env.PORT || 3001;

const schema = makeExecutableSchema({typeDefs,resolvers});

const app = express();

// This `app` is the returned value from `express()`.
const httpServer = createServer(app);

// Creating the WebSocket server
const wsServer = new WebSocketServer({
  // This is the `httpServer` we created in a previous step.
  server: httpServer,
  // Pass a different path here if your ApolloServer serves at
  // a different path.
  path: '/graphql',
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  context: {authMiddleware, pubsub},
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),
    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname, '../client/build')));}


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// create instance of Apollo server with GQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    httpServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  // starts server 
  startApolloServer(typeDefs, resolvers);
