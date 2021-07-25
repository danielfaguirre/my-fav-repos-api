export default class User {
    userName: string;
    password: string;
    isAuth: boolean;

    constructor(userName: string, password: string, isAuth: boolean) {
        this.userName = userName;
        this.password = password;
        this.isAuth = isAuth;
    }
}