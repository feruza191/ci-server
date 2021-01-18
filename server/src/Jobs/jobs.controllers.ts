/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Job } from './job.entity';

export const getAllJobs = async (_: Request, res: Response) => {
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

export const getJob = async (req: Request, res: Response) => {
	try {
		const { jobId } = req.params;
		const jobRepository = getRepository(Job);

		const job = await jobRepository.findOneOrFail({ id: jobId });
		return res.json(job);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log({ err });
		return res.status(404).json({ user: 'Job is not found' });
	}
};

export const addJob = async (req: Request, res: Response) => {
	const { commitHash } = req.params;
	const { buildCommand } = req.body;

	try {
		const jobRepository = getRepository(Job);

		const job = jobRepository.create({ commitHash, buildCommand });

		await jobRepository.save(job);

		return res.status(201).json(job);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
		return res.status(500).json(err);
	}
};

export const getLogs = async (req: Request, res: Response) => {
	try {
		const { jobId } = req.params;
		const jobRepository = getRepository(Job);

		const logs = jobRepository.findOneOrFail({ id: jobId });

		return res.json(logs);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
		return res.status(500).json(err);
	}
};
