/* eslint-disable no-console */
import { Request, Response } from 'express';

import { JobsServices } from './job.service';
import { Services } from '../share/service';

const jobsServices = new JobsServices();
const services = new Services();

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
		const jobs = await jobsServices.getAllJobs();
		const jobNumber = Array(jobs).length + 1;

		const { commitMessage, branchName } = await services.getCommitByHash(
			commitHash
		);

		const job = await jobsServices.addJobToQueue(
			commitHash,
			buildCommand,
			commitMessage,
			branchName,
			jobNumber
		);

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
