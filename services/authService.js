import { account } from "./appWrite";
import { ID } from "react-native-appwrite";

const authService = {
  //Register user
  async registerUser(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || "Registration failed",
      };
    }
  },

  //Login user
  async loginUser(email, password) {
    try {
      const response = await account.createEmailSession(email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || "Login failed",
      };
    }
  },

  //Get logged in user
  async getLoggedInUser() {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      return {
        error: error.message || "Login failed",
      };
    }
  },

  //Logout user
  async logoutUser() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return {
        error: error.message || "Logout failed",
      };
    }
  },
};

export default authService;
