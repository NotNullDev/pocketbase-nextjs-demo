import PocketBase from "pocketbase";

const serverUrl = process.env.POCKETBASE_URL ?? "http://127.0.0.1:8090";

export const pocketBaseClient = new PocketBase(serverUrl);
