import { MongoClient } from "mongodb";
const uri = process.env.NEXT_MONGODB_URI;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

if (!process.env.NEXT_MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const client: MongoClient = new MongoClient(uri, options);

export { client };

