import Cookies from "js-cookie";

class CookieHelper {
  static get() {
    return Cookies.get("token");
  }
  static set(token: string) {
    return Cookies.set("token", token);
  }
  static delete() {
    return Cookies.remove("token");
  }
}

export default CookieHelper;
