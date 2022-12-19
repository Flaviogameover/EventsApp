import { NextApiRequest, NextApiResponse } from "next/types";
import path from "path";
import fs from "fs";

const buildPath = () => path.join(process.cwd(), "data", "data.json");

const extractData = (filePath) => {
	const fileData = fs.readFileSync(filePath);
	return JSON.parse(fileData);
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const {method} = req;
	const {email, event_id} = req.body;
	const filePath = buildPath();
	const data = extractData(filePath);

	if (!data.allEvents) {
		return res.status(404).json({message: 'No events found'});
	}

	if (!email || !event_id) {
		return res.status(406).json({message: 'Email or event id not provided'});
	}

	if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) === false) {
		return res.status(406).json({message: 'Email not valid'});
	}

	if (method === 'POST') {
		const emailExists = data.allEvents.find((event) => event.id === event_id).emails_registered.includes(email);
		if (!emailExists) {
			data.allEvents.find((event) => event.id === event_id).emails_registered.push(email);
			fs.writeFileSync(filePath, JSON.stringify(data));
			return res.status(201).json({message: 'Email registered successfully'});
		} 
		return res.status(409).json({message: 'Email already registered'});

	}
	return res.status(405).json({message: 'Method not allowed'});
};

export default handler;


type Data = {
    name: string
}

type THandler = NextApiRequest & NextApiResponse<Data>;