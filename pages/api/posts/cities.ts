import {client} from "@libs/mongodb";


const handler = async (req: any, res: any) => {
	const {method} = req;
	switch (method) {
	case "GET":
		try{
			await client.connect();
			const db = client.db('main');
			const collection = db.collection('cities');
			const cities = await collection.find().toArray();
			res.status(200).json(cities);
		} catch (e: any) {
			return res.status(500).send(e.message);
		} finally {
			await client.close();
		}
		break;
	default:
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${method} Not Allowed`);
	}	
};

export default handler;