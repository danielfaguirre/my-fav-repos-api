import UserProvider from '../../Provider/User.provider';

const userProvider: UserProvider = new UserProvider();
export const userRoot = {
    SignInUser: (data: any) =>
        userProvider.signInUser(data.userName, data.password),
    signUpUser: (data: any) =>
        userProvider.signUpUser(data.userName, data.password),
    logOutUser: (data: any) =>
        userProvider.logOutUser(data.userName)
};