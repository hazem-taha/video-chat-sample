import { credentials, appConfig } from "./config";

var CONFIG = {
  endpoints : {
    api : "apievergo.connectycube.com" , // set custom API endpoint
    chat : "chatevergo.connectycube.com" // set custom Chat endpoint
  },
  conference: { server: 'wss://janusevergo.connectycube.com:8989' }
};

class AuthService {
  $loginScreen = document.getElementById("login");
  $callScreen = document.getElementById("call");
  $loader = document.getElementById("login-loader");
  $caption = document.getElementById("login-caption");



  init = () => ConnectyCube.init(credentials, CONFIG);

  createSession(user) {
    return ConnectyCube.createSession(user)
  }

  login = user => {
    console.warn('user', user);
    return new Promise((resolve, reject) => {
      this.$loader.classList.remove("hidden");
      this.$caption.classList.add("hidden");

      this.createSession(user)
        .then(() => ConnectyCube.chat.connect({ userId: user.id, password: user.password }))
        .then(() => {
          this.hideLoginScreen()
          this.$callScreen.classList.remove("hidden");
          this.$loader.classList.add("hidden");
          this.$caption.classList.remove("hidden");
          resolve();
        })
        .catch(reject);
    });
  };

  hideLoginScreen = () => {
    this.$loginScreen.classList.add("hidden");
  }

  logout = () => {
    ConnectyCube.chat.disconnect();
    ConnectyCube.destroySession();

    this.$callScreen.classList.add("hidden");
    this.$loginScreen.classList.remove("hidden");
  };
}

// create instance
const Auth = new AuthService();
// lock instance
Object.freeze(Auth);

export default Auth;
