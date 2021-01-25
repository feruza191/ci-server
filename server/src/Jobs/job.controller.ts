/* eslint-disable no-console */
import { Request, Response } from 'express';

import { JobsServices } from './job.service';

const jobsServices = new JobsServices();

export const getJobs = async (_: Request, res: Response): Promise<Response> => {
	try {
		const jobs = await jobsServices.getAllJobs();

		return res.json(jobs);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};

export const getJob = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { jobId } = req.params;

	try {
		const job = await jobsServices.getJobById(jobId);

		return res.json(job);
	} catch (err) {
		console.log({ err });
		return res.status(404).json(err);
	}
};

export const addJob = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { commitHash } = req.params;
	const { buildCommand } = req.body;

	try {
		const job = await jobsServices.addJobToQueue(commitHash, buildCommand);

		return res.json(job);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};

export const getLogs = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { jobId } = req.params;

	try {
		const logs = await jobsServices.getJobLogs(jobId);

		return res.json(logs);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};
