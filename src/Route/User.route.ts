import { graphqlHTTP } from 'express-graphql';
import { userSchema } from '../GraphQL/Schemas/User.schema';
import { userRoot } from '../GraphQL/Root/User.root';

export const userRoute = graphqlHTTP({
    schema: userSchema,
    rootValue: userRoot,
    graphiql: true
});