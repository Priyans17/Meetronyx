import { ENV } from "./env.js";

// Stream API helper functions for managing users
export const upsertStreamUser = async ({ id, name, image }) => {
  try {
    if (!ENV.STREAM_API_KEY || !ENV.STREAM_API_SECRET) {
      console.warn("Stream API credentials not configured");
      return;
    }
    
    // TODO: Implement upsertStreamUser with Stream API
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
    
    // TODO: Implement deleteStreamUser with Stream API
    console.log(`Deleting stream user: ${id}`);
  } catch (error) {
    console.error("Error deleting stream user:", error);
  }
};
