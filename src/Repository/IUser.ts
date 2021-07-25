import User from "../Model/User";

export interface IUser {
    /**
     * user authentication
     * @param user user to authenticate
     */
    signInUser(userName: string, password: string): User;

    /**
     * user registration
     * @param user user to register
     */
    signUpUser(userName: string, password: string): User;

    /**
     * user logout
     * @param userName user to logout
     */
    logOutUser(userName: string): User;
}
