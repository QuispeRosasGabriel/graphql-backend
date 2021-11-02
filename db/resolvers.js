const User = require('../models/User')

const resolvers = {
    Query: {
        getCourse: () => 'Smething'
    },
    Mutation: {
        newUser: async(_, {input}) => {
            const {email, password} = input;
            // Check if user exist 
            const userAlreadyExist = await User.findOne({email});
            if(userAlreadyExist) throw new Error("User already exist");
           // Hash password
           // Save on db

           try {
               const user = new User(input);
               user.save();
               return user;
           } catch (error) {
            throw new Error(`Unexpected Error ${error}`)
           }
        }
    }
}

module.exports = resolvers;