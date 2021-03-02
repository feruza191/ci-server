import { Request, Response, NextFunction } from 'express';

import { JobService } from './job.service';
import { SandboxService } from '../share/sandboxService';
import { SettingsService } from '../Settings/settings.service';
import { Job } from './job.entity';
import { AppError } from '../share/appError';
import { HttpCodes } from '../share/enum';
import TextKeys from '../share/TextKeys';

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

		if (!jobs) {
			throw new AppError(TextKeys.NotRetrievedJobs, HttpCodes.NotFound);
		}

		return res.json(jobs);
	} catch (err) {
		next(err);
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
			throw new AppError(TextKeys.JobIsNotFound, HttpCodes.NotFound);
		}

		return res.json(job);
	} catch (err) {
		next(err);
	}
};

export const addJob = async (
	req: Request<{ commitHash: string }, unknown, { buildCommand: string }>,
	res: Response<Job>,
	next: NextFunction
): Promise<Response<Job> | undefined> => {
	const { commitHash } = req.params;
	const { buildCommand } = req.body;

	try {
		if (!buildCommand) {
			throw new AppError(
				TextKeys.BuildCommandIsRequired,
				HttpCodes.BadRequest
			);
		}

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
		next(err);
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
		next(err);
	}
};
