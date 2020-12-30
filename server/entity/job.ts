import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { JobStatus } from 'src/core/enums/JobStatus';

@Entity()
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
