// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }

<<<<<<< HEAD
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addThought(thoughtId: ID!, reactionBody: String!): Thought
        addFriend(friendId: ID!): User
    }

=======
>>>>>>> 1e6f81d94af45016e685cdd0eb994cd3b59fa942
    type Auth {
        token: ID!
        user: User
    }
<<<<<<< HEAD
=======

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
>>>>>>> 1e6f81d94af45016e685cdd0eb994cd3b59fa942
`;

// export the typeDefs
module.exports = typeDefs;