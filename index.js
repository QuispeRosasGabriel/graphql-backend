const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./db/schema.graphql')
const resolvers = require('./db/resolvers')


// Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        const myContext = 'Hello';
        return {
            myContext
        }
    }
});

// Start server
server.listen().then(({url}) => {
    console.log('Corriendo en el puerto ' + url)
})
