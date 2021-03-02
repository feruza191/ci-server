import { getRepository } from 'typeorm';

import { Job } from './job.entity';
import TextKeys from '../share/TextKeys';

export class JobService {
	public async getAllJobs(): Promise<Job[] | undefined> {
		try {
			const jobRepository = getRepository(Job);

			return await jobRepository.find();
		} catch (e) {
			throw Error(TextKeys.NotRetrievedJobs);
		}
	}

	public async getJobById(id: string): Promise<Job | undefined> {
		try {
			const jobRepository = getRepository(Job);
			const job = await jobRepository.findOne(id);

			return job;
		} catch (e) {
			throw Error(TextKeys.SomethingWentWrong);
		}
	}

	public async addJobToQueue(
		commitHash: string,
		buildCommand: string,
		commitMessage: string,
		branchName: string,
		jobNumber: number
	): Promise<Job> {
		try {
			const jobRepository = getRepository(Job);
			const job = jobRepository.create({
				commitHash,
				buildCommand,
				commitMessage,
				branchName,
				jobNumber,
			});

			return jobRepository.save(job);
		} catch (e) {
			throw Error(TextKeys.FailedToAddJobToQueque);
		}
	}

	public async getJobLogs(jobId: string): Promise<string | null> {
		try {
			const jobRepository = getRepository(Job);

			const job = await jobRepository.findOneOrFail({ id: jobId });

			const { jobLogs } = job;

			return jobLogs;
		} catch (e) {
			throw Error(TextKeys.FailedToRetrieveJobLogs);
		}
	}
}
