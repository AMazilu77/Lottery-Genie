
// export an interface to define how authentication data should look like
// user password should not be  stored on front end anywhere for too long
export interface AuthData {
    email: string;
    password: string;
}