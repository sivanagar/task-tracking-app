//jwt decode token and save token class


import {jwtDecode} from "jwt-decode";


class AuthService
{
    //get token
    // Retrieves the user token from localStorage
    getToken()
    {
        return localStorage.getItem("id_token");
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token); // handwaiving here
      }
    
    isTokenExpired(token) {
        try {
          const decoded = jwtDecode(token);
          if (decoded.exp < Date.now() / 1000) {
            return true;
          } else return false;
        } catch (err) {
          return false;
        }
      }
    

    //get user data
    getProfile()
    {
        return jwtDecode(this.token);
    }

    //login
    // Saves user token to localStorage
    login(token)
    {
        localStorage.setItem("id_token", token);
        
        // window.location.assign('/dashboard');
    }

    //logout
     // Clear user token and profile data from localStorage
    logout()
    {
        localStorage.removeItem("id_token");
        // this will reload the page and reset the state of the application
    // window.location.assign('/');
    }
}
const authServiceInstance = new AuthService();
export default authServiceInstance;