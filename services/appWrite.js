import { Client, Databases, Account } from "react-native-appwrite";
import { Platform } from "react-native";

const config = {
  endPoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  collection: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_NOTES_COLLECTION_ID,
  },
  packageName: process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME,
};

const client = new Client()
  .setEndpoint(config.endPoint)
  .setProject(config.projectId);

switch (Platform.OS) {
  case "android":
    client.setPlatform(config.packageName);
    break;
}

const database = new Databases(client);
const account = new Account(client);

export { client, database, account, config };
