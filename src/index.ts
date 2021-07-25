import { userRoute } from './Route/User.route';
import express from 'express';
import cors from 'cors';
import { GHrespositoryRoute } from './Route/GHRespository.route';
import { SERVER_PORT } from './Constants';

const app = express();
app.use(cors());

/**
 * Rout for users
 */
app.use('/graphql/users', userRoute);

/**
 * Rout for github repositories
 */
app.use('/graphql/gh_repositories', GHrespositoryRoute);

app.listen(SERVER_PORT, () =>
    console.log(`Example app listening on port 3001!`)
);