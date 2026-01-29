import { ENV } from "./env.js";
import { StreamChat } from "stream-chat";

// Initialize Stream Chat client
export const chatClient = new StreamChat(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET);

// Stream API helper functions for managing users
export const upsertStreamUser = async ({ id, name, image }) => {
  try {
    if (!ENV.STREAM_API_KEY || !ENV.STREAM_API_SECRET) {
      console.warn("Stream API credentials not configured");
      return;
    }
    
    await chatClient.upsertUser({
      id,
      name,
      image,
    });
    console.log(`Upserting stream user: ${id}`);
  } catch (error) {
    console.error("Error upserting stream user:", error);
  }
};

export const deleteStreamUser = async (id) => {
  try {
    if (!ENV.STREAM_API_KEY || !ENV.STREAM_API_SECRET) {
      console.warn("Stream API credentials not configured");
      return;
    }
    
    await chatClient.deleteUser(id);
    console.log(`Deleting stream user: ${id}`);
  } catch (error) {
    console.error("Error deleting stream user:", error);
  }
};
