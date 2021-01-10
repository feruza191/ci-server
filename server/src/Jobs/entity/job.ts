import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum JobStatus {
	Waiting = 'Waiting',
	InProgress = 'InProgress',
	Success = 'Success',
	Fail = 'Fail',
	Cancelled = 'Canceled',
}

@Entity()
export class Job {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('int')
	jobNumber: number;

	@Column('text')
	commitMessage: string;

	@Column('text')
	commitHash: string;

	@Column('text')
	branchName: string;

	@Column({ type: 'enum', enum: JobStatus, default: JobStatus.Waiting })
	status: JobStatus;

	@Column({ nullable: true, type: 'text' })
	start: string | null;

	@Column({ nullable: true, type: 'text' })
	finish: string | null;

	@Column({ nullable: true, type: 'int' })
	duration: number | null;

	@Column({ nullable: true, type: 'text' })
	jobLogs: string | null;

	@Column('text')
	buildCommand: string;
}
