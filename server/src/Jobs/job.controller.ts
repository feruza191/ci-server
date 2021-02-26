import { Request, Response, NextFunction } from 'express';

import { JobService } from './job.service';
import { SandboxService } from '../share/sandboxService';
import { SettingsService } from '../Settings/settings.service';
import { Job } from './job.entity';
import { ErrorHandler } from '../share/errorHandler';

const jobsServices = new JobService();
const sandBoxService = new SandboxService();
const settingServices = new SettingsService();

export const getJobs = async (
	_: Request,
	res: Response<Job[]>,
	next: NextFunction
): Promise<Response<Job[]> | undefined> => {
	try {
		const jobs = await jobsServices.getAllJobs();

		return res.json(jobs);
	} catch (err) {
		next(ErrorHandler.internalError('Could not retrieve all jobs!'));
	}
};

export const getJob = async (
	req: Request<{ jobId: string }>,
	res: Response<Job>,
	next: NextFunction
): Promise<Response<Job> | undefined> => {
	const { jobId } = req.params;

	try {
		const job = await jobsServices.getJobById(jobId);

		if (!job) {
			next(ErrorHandler.notFoundRequest('Job is not found!'));
		}

		return res.json(job);
	} catch (err) {
		next(ErrorHandler.internalError('Could not retrieve job!'));
	}
};

export const addJob = async (
	req: Request<{ commitHash: string }, unknown, { buildCommand: string }>,
	res: Response<Job>,
	next: NextFunction
): Promise<Response<Job> | undefined> => {
	const { commitHash } = req.params;
	const { buildCommand } = req.body;

	if (!buildCommand) {
		next(
			ErrorHandler.badRequest(
				'buildCommand is required and must be non blank'
			)
		);
	}

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

		const { commitMessage } = await sandBoxService.getCommitByHash(
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
		next(ErrorHandler.internalError('Failed to add job to the queque!'));
	}
};

export const getLogs = async (
	req: Request<{ jobId: string }>,
	res: Response<string | null>,
	next: NextFunction
): Promise<Response<string | null> | undefined> => {
	const { jobId } = req.params;

	try {
		const logs = await jobsServices.getJobLogs(jobId);

		return res.json(logs);
	} catch (err) {
		next(ErrorHandler.internalError('Failed to retrieve the job logs'));
	}
};
