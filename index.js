const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./db/schema.graphql')
const resolvers = require('./db/resolvers')

const connectDB = require('./config/db');

//Connect DB

connectDB();

// Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Start server
server.listen().then(({url}) => {
    console.log('Corriendo en el puerto ' + url)
})
