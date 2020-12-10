export enum JobStatus {
	Waiting = 'Waiting',
	InProgress = 'InProgress',
	Success = 'Success',
	Fail = 'Fail',
	Cancelled = 'Canceled',
}

interface JobItem {
	id: string;
	jobNumber: number;
	commitMessage: string;
	commitHash: string;
	branchName: string;
	status: JobStatus;
	start: string | null;
	finish: string | null;
	duration: number | null;
	jobLogs: string | null;
	buildCommand: string;
}

export interface JobProps {
	job: JobItem;
}
