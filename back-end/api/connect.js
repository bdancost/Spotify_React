import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://bdancost:j0aZv08nDyLP5QUf@clusterspotify.62tkw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSpotify";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
