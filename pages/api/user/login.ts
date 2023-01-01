import { Collection, Db, WithId } from "mongodb";
import {client} from "@libs/mongodb";
import bycrypt from 'bcrypt';	
import jwt from 'jsonwebtoken';

// .env variables
const jwtSecret = 'g1595807'; // process.env.JWT_SECRET;

export default async function handler(req, res) {
	const {username, password} = req.body;
	try {
		await client.connect();
		const db: Db = client.db('main');
		const collection /*: Collection<WithId<User>> */ = db.collection('users');
		// hash password later
		const user = await collection.findOne({username, password});
		if (user) {
			// set cookie
			const token = jwt.sign(
				{
					name: user.name,
					username: user.username,
					user_pic: user.user_pic,
					admin: user.admin
				},
				jwtSecret,
				{
					expiresIn: 3000, //50 minutes
				},
			);
			res.status(200).json({token});
			return;
		}
		return res.status(404).send('User not found');
	} catch (e: any) {
		return res.status(500).send(e.message);
	} finally {
		await client.close();
	}
};


	

// if (match) {
//     const token = jwt.sign(
//       {userId: user.userId, email: user.email},
//       jwtSecret,
//       {
//         expiresIn: 3000, //50 minutes
//       },
//     );
//     res.status(200).json({token});
//     return;
// }
