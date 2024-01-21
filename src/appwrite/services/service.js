import config from "../../config/config";
import { Client, Account, ID, Storage, Databases, Query } from "appwrite";
import {v4 as uuidv4} from "uuid";

export class Service {

  client = new Client(); 

  constructor() { 
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId)

    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }


  async createPost({ Title, slug, Content, featuredImage, Status, UserId}) {
    try {
      const id = uuidv4(); // generate a random id
      console.log("id", id);
      const post = await this.databases.createDocument(
        config.appwriteDatabaseId,    
        config.appwriteCollectionId,
        id, // documentId
        {
          Title,
          Content,
          featuredImage,
          Status,
          UserId,
        }
      );

      return post;  
    } catch (error) {
      
      if (error.code === 409) {
        return "Slug already exists";
      }


      console.log("CreatePost Error", error.code);
    }

  }
  async updatePost(slug, { Title, Content, featuredImage, Status }) {
    try {
      const updatedPost = await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId, 
        slug, 
        {
          Title,
          Content,
          featuredImage,
          Status,
        }
      );
      return updatedPost;
    } catch (error) {
      console.log(error);
    }
  }
  async deletePost(slug) {
   
    try {
        await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
        return true;
        // "Post deleted successfully!";
    } catch (error) {
        console.log(error);
    }

  }
  async getPost(slug){
    
    try {
        const post = await this.databases.getDocument(
          config.appwriteDatabaseId,
          config.appwriteCollectionId,
          slug // it is the documentId
        )    
        return post;
    } catch (error) {
        console.log("Appwrite Post Error:", error);
        return "Post not found";
    }
     
  }
  async getAllPosts(){
   
    try {
        const posts = await this.databases.listDocuments(
          config.appwriteDatabaseId, 
          config.appwriteCollectionId,
          // [
          //   Query.equal("Status", "active"),
          // ]
        )
        return posts;
    } catch (error) {
        console.log(error)
    }

  }
  // file
  async uploadFile(file) {
    try {
      const uploadedFile = await this.storage.createFile(config.appwriteBucketId, ID.unique(), file); 
      return uploadedFile;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteFile(fileId){
   
    try {
        await this.storage.deleteFile(config.appwriteBucketId, fileId);
        return true;
        // return "File deleted successfully!";
    } catch (error) {
        console.log(error)
    }
  }
   getFilePreview(fileId){
     
    try {
        const filePreview = this.storage.getFilePreview(config.appwriteBucketId, fileId);
        return filePreview;
    } catch (error) {
      console.log(error)
    }
    
  }
}

const service = new Service();
export default service;

