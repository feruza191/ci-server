/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Request, Response } from 'express';

import { JobsServices } from './job.service';

const jobsServices = new JobsServices();

export const getJobs = async (_: Request, res: Response): Promise<any> => {
	try {
		const jobs = jobsServices.getAllJobs();

		return res.json(jobs);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};

export const getJob = async (req: Request, res: Response): Promise<any> => {
	const { jobId } = req.params;

	try {
		const job = jobsServices.getJobById(jobId);

		return res.json(job);
	} catch (err) {
		console.log({ err });
		return res.status(404).json(err);
	}
};

export const addJob = async (req: Request, res: Response): Promise<any> => {
	const { commitHash } = req.params;
	const { buildCommand } = req.body;

	try {
		const job = jobsServices.addJobToQueue(commitHash, buildCommand);

		return res.status(201).json(job);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};

export const getLogs = async (req: Request, res: Response): Promise<any> => {
	const { jobId } = req.params;

	try {
		const logs = jobsServices.getJobLogs(jobId);

		return res.json(logs);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};
