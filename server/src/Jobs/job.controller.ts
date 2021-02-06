/* eslint-disable no-console */
import { Request, Response } from 'express';

import { JobService } from './job.service';
import { SandboxService } from '../share/sandboxService';
import { SettingsService } from '../Settings/settings.service';
import { Job } from './job.entity';

const jobsServices = new JobService();
const services = new SandboxService();
const settingServices = new SettingsService();

export const getJobs = async (
	_: Request,
	res: Response<Job[]>
): Promise<Response<Job[]> | undefined> => {
	try {
		const jobs = await jobsServices.getAllJobs();

		return res.json(jobs);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};

export const getJob = async (
	req: Request<{ jobId: string }>,
	res: Response<Job>
): Promise<Response<Job> | undefined> => {
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
	req: Request<{ commitHash: string }, unknown, { buildCommand: string }>,
	res: Response<Job>
): Promise<Response<Job> | undefined> => {
	const { commitHash } = req.params;
	const { buildCommand } = req.body;

	try {
		const jobs = await jobsServices.getAllJobs();

		let jobNumber = 0;
		if (jobs instanceof Array) {
			jobNumber = jobs.length + 1;
		}

		const settings = await settingServices.getSettings();

		let branchName = '';
		if (settings) {
			branchName = settings.mainBranch;
		}

		const { commitMessage } = await services.getCommitByHash(commitHash);

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
	req: Request<{ jobId: string }>,
	res: Response<Job>
): Promise<Response<Job> | undefined> => {
	const { jobId } = req.params;

	try {
		const logs = await jobsServices.getJobLogs(jobId);

		return res.json(logs);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};
