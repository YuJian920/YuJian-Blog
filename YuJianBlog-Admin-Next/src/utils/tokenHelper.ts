class TokenHelper {
  static get() {
    return localStorage.getItem("x-token");
  }
  static set(token: string) {
    return localStorage.setItem("x-token", token);
  }
  static clean() {
    return localStorage.removeItem("x-token");
  }
}

export default TokenHelper;
