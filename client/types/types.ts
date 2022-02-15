import { JobStatus } from 'client/core/enums/JobStatus';

export interface JobItem {
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
	authorName: string | null;
	buildCommand: string;
}

export interface SettingsItem {
	id: string;
	repoName: string;
	mainBranch: string;
	period: number;
}
