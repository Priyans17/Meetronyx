import { ENV } from "./env.js";
import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";

// Initialize Stream Chat client for messaging
export const chatClient = new StreamChat(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET);

// Initialize Stream Video client for video calls (only if credentials are available)
export const streamClient = ENV.STREAM_API_KEY && ENV.STREAM_API_SECRET 
  ? new StreamClient({
      apiKey: ENV.STREAM_API_KEY,
      secret: ENV.STREAM_API_SECRET,
    })
  : null;

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
