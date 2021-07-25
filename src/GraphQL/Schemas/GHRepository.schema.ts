import { buildSchema } from 'graphql';

export const ghRepositorySchema = buildSchema(`
    type Query{
        getGHRepositories(userName: String!): [GHRepository]
    }

    type Mutation {
        setFavorite(name: String!, userName: String!, isFavorite: Boolean!): GHRepository
    }

    type GHRepository {
        name: String
        url: String
        userName: String
        isFavorite: Boolean
    }
`);