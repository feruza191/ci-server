import { getRepository } from 'typeorm';

import { Job } from './job.entity';
import TextKeys from '../share/enums/TextKeys';
import { HttpCodes } from '../share/enums/HttpCodes';
import { AppError } from '../share/appError';

export class JobService {
	public async getAllJobs(): Promise<Job[] | undefined> {
		try {
			const jobRepository = getRepository(Job);

			return await jobRepository.find();
		} catch (e) {
			throw new AppError(TextKeys.NotRetrievedJobs, HttpCodes.NotFound);
		}
	}

	public async getJobById(id: string): Promise<Job | undefined> {
		try {
			const jobRepository = getRepository(Job);
			const job = await jobRepository.findOne(id);

			return job;
		} catch (e) {
			throw new AppError(
				TextKeys.SomethingWentWrong,
				HttpCodes.ServerError
			);
		}
	}

	public async addJobToQueue(
		commitHash: string,
		buildCommand: string,
		commitMessage: string,
		branchName: string,
		jobNumber: number,
		authorName: string
	): Promise<Job> {
		try {
			const jobRepository = getRepository(Job);
			const job = jobRepository.create({
				commitHash,
				buildCommand,
				commitMessage,
				branchName,
				jobNumber,
				authorName,
			});

			return jobRepository.save(job);
		} catch (e) {
			throw new AppError(
				TextKeys.FailedToAddJobToQueque,
				HttpCodes.ServerError
			);
		}
	}

	public async getJobLogs(jobId: string): Promise<string | null> {
		try {
			const jobRepository = getRepository(Job);

			const job = await jobRepository.findOneOrFail({ id: jobId });

			const { jobLogs } = job;

			return jobLogs;
		} catch (e) {
			throw new AppError(
				TextKeys.FailedToRetrieveJobLogs,
				HttpCodes.ServerError
			);
		}
	}
}
