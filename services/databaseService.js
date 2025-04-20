import { database } from "./appWrite";

const databaseService = {
  //list documents
  async listDocuments(dbId, collectionId, quaries = []) {
    try {
      const response = await database.listDocuments(
        dbId,
        collectionId,
        quaries
      );
      return { data: response.documents || [], error: response.error || null };
    } catch (error) {
      console.error("Error fetching documents:", error.message);
      return { error: error.message };
    }
  },
  // Create Documents
  async createDocument(dbId, collectionId, data, id = null) {
    try {
      return await database.createDocument(
        dbId,
        collectionId,
        id || undefined,
        data
      );
    } catch (error) {
      console.error("Error creating document", error.message);
      return {
        error: error.message,
      };
    }
  },
  // Update Document
  async updateDocument(dbId, collectionId, id, data) {
    try {
      return await database.updateDocument(dbId, collectionId, id, data);
    } catch (error) {
      console.error("Error updating document", error.message);
      return {
        error: error.message,
      };
    }
  },
  // Delete Document
  async deleteDocument(dbId, collectionId, id) {
    try {
      await database.deleteDocument(dbId, collectionId, id);
      return { success: true };
    } catch (error) {
      console.error("Error deleting document", error.message);
      return {
        error: error.message,
      };
    }
  },
};

export default databaseService;
