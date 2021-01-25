import { Repository, getRepository } from 'typeorm';

import { Job } from './job.entity';

export class JobsServices {
	private jobRepository: Repository<Job>;

	public async getAllJobs(): Promise<Job[] | void> {
		try {
			const jobRepository = getRepository(Job);

			return await jobRepository.find();
		} catch (e) {
			throw Error('Could not retrieve all jobs!');
		}
	}

	public async getJobById(jobId: string): Promise<Job | void> {
		try {
			const jobRepository = getRepository(Job);

			return await jobRepository.findOneOrFail({ id: jobId });
		} catch (e) {
			throw Error('Job is not found');
		}
	}

	public async addJobToQueue(
		commitHash: string,
		buildCommand: string
	): Promise<Job | void> {
		try {
			const jobRepository = getRepository(Job);
			const job = jobRepository.create({ commitHash, buildCommand });

			return jobRepository.save(job);
		} catch (e) {
			throw Error('Failed to add job to the queque!');
		}
	}

	public async getJobLogs(jobId: string): Promise<Job | void> {
		try {
			const jobRepository = getRepository(Job);

			return jobRepository.findOneOrFail({ id: jobId });
		} catch (e) {
			throw Error('Failed to retrieve the job logs');
		}
	}
}
