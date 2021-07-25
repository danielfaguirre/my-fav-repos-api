import User from '../../Model/User';

export const validateSignInUser = (
    userName: string,
    password: string,
    users: User[]): string => {
    let errorMessage = "";
    if (!userExist(userName, users))
        return `The user ${userName} doesn't exist.`;
    if (!credentialsOK(userName, password, users))
        return `The provided credentials are incorrect.`;
    return errorMessage;
}

export const validateSignUpUser = (
    userName: string,
    users: User[]): string => {
    let errorMessage = "";
    if (userExist(userName, users))
        return `The user ${userName} is already registered.`;
    return errorMessage;
}

const userExist = (userName: string, users: User[]): boolean => {
    return users.find(user =>
        user.userName === userName
    ) ? true : false;
}

const credentialsOK = (userName: string, password: string, users: User[]): boolean => {
    return users.find(user =>
        user.userName === userName
        && user.password === password
    ) ? true : false;
}