import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { v4 as uuid } from 'uuid';

enum JobStatus {
	Waiting = 'Waiting',
	InProgress = 'InProgress',
	Success = 'Success',
	Fail = 'Fail',
	Cancelled = 'Canceled',
}

@Entity('jobs')
export class Job {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	jobNumber: number;

	@Column()
	commitMessage: string;

	@Column()
	commitHash: string;

	@Column()
	branchName: string;

	@Column()
	status: JobStatus;

	@Column()
	start: string | null;

	@Column()
	finish: string | null;

	@Column()
	duration: number | null;

	@Column()
	jobLogs: string | null;

	@Column()
	buildCommand: string;
}
