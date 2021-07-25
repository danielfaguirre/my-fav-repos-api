import { buildSchema } from 'graphql';

export const userSchema = buildSchema(`
    type Query{
        SignInUser(userName: String!, password: String!): User
        logOutUser(userName: String!): User
    }

    type Mutation {
        signUpUser(userName: String!, password: String!): User
    }

    type User {
        userName: String
        password: String
        isAuth: Boolean
    }
`);