import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import ENV from "./ENV.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

// 1. Check for missing credentials (Optional, but good practice)
if (!apiKey || !apiSecret) {
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing. Check your backend .env file.");
}

// Configuration options to increase timeout from default 3000ms to 10000ms
const clientOptions = {
    timeout: 10000, 
};

// 2. Initialize StreamChat Client (Requires API Key, API Secret, and options)
// We use StreamChat.getInstance() for chat server-side operations
export const chatClient = StreamChat.getInstance(apiKey, apiSecret, clientOptions);

// 3. Initialize Stream Video Client (Requires API Key, API Secret, and options)
// We use new StreamClient() for video server-side operations (like call management)
// This is the structure that fixed the "secretOrPrivateKey is not valid key material" error.
export const streamClient = new StreamClient(apiKey, apiSecret, clientOptions);

// --- User Management Functions ---

export const upsertStreamUser = async (userData) => {
    try {
        // userData should typically contain { id: clerkId, name: userName, image: userImage }
        await chatClient.upsertUser(userData);
        console.log("Stream user upserted successfully:", userData.id);
    } catch (error) {
        // Log a helpful error if Stream provisioning fails
        console.error("Error upserting Stream user:", error.message);
    }
};

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId);
        console.log("Stream user deleted successfully:", userId);
    } catch (error) {
        console.error("Error deleting the Stream user:", error.message);
    }
};