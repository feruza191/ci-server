import { connection } from 'server/connection/connection';
import { Request, Response } from 'express';
import { Setting } from 'server/entity/setting';

exports.getSettings = (req: Request, res: Response) => {
	connection
		.then(async (con) => {
			const settings: Setting[] = await con.manager.find(Setting);
			res.json(settings);
		})
		.catch((error) => {
			// eslint-disable-next-line no-console
			console.error('Error ', error);
			res.json(error);
		});
};
