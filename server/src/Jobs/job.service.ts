import { Repository, getRepository } from 'typeorm';

import { Job } from './job.entity';

export class JobsServices {
	private jobRepository: Repository<Job>;

	public async getAllJobs(): Promise<Job[] | void> {
		try {
			this.jobRepository = getRepository(Job);
			const jobs = await this.jobRepository.find();

			return jobs;
		} catch (e) {
			throw Error('Could not retrieve all jobs!');
		}
	}

	public async getJobById(jobId: string): Promise<Job | void> {
		try {
			this.jobRepository = getRepository(Job);
			const job = await this.jobRepository.findOneOrFail({ id: jobId });

			return job;
		} catch (e) {
			throw Error('Job is not found');
		}
	}

	public async addJobToQueue(
		commitHash: string,
		buildCommand: string
	): Promise<Job | void> {
		try {
			this.jobRepository = getRepository(Job);
			const job = this.jobRepository.create({ commitHash, buildCommand });

			return await this.jobRepository.save(job);
		} catch (e) {
			throw Error('Failed to add job to the queque!');
		}
	}

	public async getJobLogs(jobId: string): Promise<Job | void> {
		try {
			this.jobRepository = getRepository(Job);
			const logs = this.jobRepository.findOneOrFail({ id: jobId });

			return logs;
		} catch (e) {
			throw Error('Failed to retrieve the job logs');
		}
	}
}
