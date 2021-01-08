import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Job } from '../entity/job';

exports.getAllJobs = async (_: Request, res: Response) => {
	try {
		const jobRepository = getRepository(Job);
		const jobs = await jobRepository.find();
		return res.json(jobs);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
};
