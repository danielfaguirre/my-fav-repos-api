import User from '../Model/User';
import { LocalStorage } from 'node-localstorage';
import { validateSignInUser, validateSignUpUser } from './Validation/User.validations';
import { IUser } from '../Repository/IUser';
import { BD_DIRECTORY } from '../Constants';

const localStorage: any = new LocalStorage(BD_DIRECTORY);
let users: User[] = localStorage.users
    ? JSON.parse(localStorage.users) : [];
export default class UserProvider implements IUser {

    signInUser(userName: string, password: string): User {
        const errorMessage = validateSignInUser(userName, password, users);
        if (errorMessage)
            throw new Error(errorMessage);
        return new User(userName, '', true);
    }

    signUpUser(userName: string, password: string): User {
        const errorMessage = validateSignUpUser(userName, users);
        if (errorMessage)
            throw new Error(errorMessage);
        const user = new User(userName, password, false);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return user;
    }

    logOutUser(userName: string): User {
        return new User(userName, '', false);
    }

}