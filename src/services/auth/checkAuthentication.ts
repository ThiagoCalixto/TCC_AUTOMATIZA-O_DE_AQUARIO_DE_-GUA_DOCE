import { verify, TokenExpiredError } from "jsonwebtoken";
import authConfig from "./secret";

const isAuthenticated = () => {
  const token = localStorage.getItem("@TccAquarium:token");

  if(!token) {
   return false;
 }

  try {
    verify(token, String(authConfig.jwt.secret));
    return true;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
       return false;
      } else {
       return true;
      }
  }
};

export default isAuthenticated;
