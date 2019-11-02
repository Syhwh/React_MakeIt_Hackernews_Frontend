
const Auth = {
    isAuthenticated: false,
    
     login  () {
        const token = localStorage.getItem('jwt');
        console.log(token)
        if (token) {
            this.isAuthenticated = true;
        }
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    }
};
export default Auth;