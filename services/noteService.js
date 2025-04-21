import databaseService from "./databaseService";
import { ID, Query } from "react-native-appwrite";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_NOTES_COLLECTION_ID;

const noteService = {
  //get notes
  async getNotes(userId) {
    if (!userId) {
      console.error("User id is required");
      return {
        error: "User id is required",
        data: [],
      };
    }
    try {
      const response = await databaseService.listDocuments(dbId, collectionId, [
        Query.equal("user_id", userId),
      ]);
      return response;
    } catch (error) {
      console.error("Error fetching notes", error.message);
      return {
        error: error.message,
        data: [],
      };
    }
  },
  //add new note
  async addNote(user_id, title) {
    if (!title) {
      return { error: "Title is required" };
    }
    const data = {
      user_id,
      text: title,
      createdAt: new Date().toISOString(),
    };
    const response = await databaseService.createDocument(
      dbId,
      collectionId,
      data,
      ID.unique()
    );
    if (response?.error) {
      return { error: response.error };
    }
    return { data: response };
  },

  //update note
  async updateNote(id, text) {
    const response = await databaseService.updateDocument(
      dbId,
      collectionId,
      id,
      {
        text,
      }
    );
    if (response?.error) {
      return { error: response.error };
    }
    return { data: response };
  },

  //delete note
  async deleteNote(id) {
    const response = await databaseService.deleteDocument(
      dbId,
      collectionId,
      id
    );
    if (response?.error) {
      return { error: response.error };
    }
    return { success: true };
  },
};

export default noteService;
