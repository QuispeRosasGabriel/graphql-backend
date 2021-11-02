
const resolvers = {
    Query: {
        getCourse: () => 'Smething'
    },
    Mutation: {
        newUser: (_, {input}) => {
            console.log(input)
            return "Creando"
        }
    }
}

module.exports = resolvers;