import config from "../../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client(); // automatically becomes an instance property of the class

  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }
  // actions
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount.$id) {
        return this.login({ email, password }); // login the user after creating the account
      } else {
        throw new Error("User account not created");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async login({ email, password }) {
    try {
      const userAccount = await this.account.createEmailSession(
        email,
        password
      );
      return userAccount;
    } catch (error) {
      console.log(error);
    }
  }
  async getCurrentUser() {
    try {
      const userAccount = await this.account.get();
      return userAccount;
    } catch (error) {
      console.log(error);
    }
    return "User not logged in";
  }
  async logout() {
    try {
      await this.account.deleteSessions();
      return "User logged out";
    } catch (error) {
      console.log(error);
    }
  }
  async updateAccount({email, password}){
    
    try {
       
      await this.account.updateEmail(email);
      await this.account.updatePassword(password);
      return "User updated";
       
    } catch (error) {
      console.log(error)
    }
  
  }
}
const authService = new AuthService();

export default authService;
