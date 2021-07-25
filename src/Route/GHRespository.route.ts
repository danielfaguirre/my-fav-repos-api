import { graphqlHTTP } from 'express-graphql';
import { ghRepositorySchema } from '../GraphQL/Schemas/GHRepository.schema';
import { ghRepositoryRoot } from '../GraphQL/Root/GHRepository.root';


export const GHrespositoryRoute = graphqlHTTP({
    schema: ghRepositorySchema,
    rootValue: ghRepositoryRoot,
    graphiql: true
});