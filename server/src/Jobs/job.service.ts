import { getRepository } from 'typeorm';

import { Job } from './job.entity';

export class JobService {
	public async getAllJobs(): Promise<Job[]> {
		try {
			const jobRepository = getRepository(Job);

			return await jobRepository.find();
		} catch (e) {
			throw Error('Could not retrieve all jobs!');
		}
	}

	public async getJobById(id: string): Promise<Job> {
		try {
			const jobRepository = getRepository(Job);
			const job = await jobRepository.findOne(id);

			if (!job) {
				throw Error('Job is not found!');
			}

			return job;
		} catch (e) {
			throw Error('Something went wrong!');
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
			throw Error('Failed to add job to the queque!');
		}
	}

	public async getJobLogs(jobId: string): Promise<Job> {
		try {
			const jobRepository = getRepository(Job);

			return jobRepository.findOneOrFail({ id: jobId });
		} catch (e) {
			throw Error('Failed to retrieve the job logs');
		}
	}
}
