/* eslint-disable no-console */
import { exec } from 'child_process';
import util from 'util';

import TextKeys from './enums/TextKeys';

interface JobBuild {
	authorName: string;
	commitMessage: string;
	branchName: string;
}

const directory = 'clonedProject';
const localRepoPath = `${directory}/my-mobx`;
const execPromise = util.promisify(exec);

export class SandboxService {
	public async gitClone(repoName: string): Promise<void> {
		const gitCommand = `cd ${directory} && git clone https://github.com/${repoName}`;

		try {
			await execPromise(gitCommand);
		} catch (err) {
			console.error({ err });
			throw Error(`${TextKeys.FailedToCloneRepository} ${repoName}`);
		}
	}

	private async checkout(branchName: string) {
		try {
			const gitCommand = `cd ${localRepoPath} && git checkout ${branchName}`;
			await execPromise(gitCommand);
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToCheckout} ${branchName}`);
		}
	}

	public async getCommitByHash(
		commitHash: string,
		branchName = 'master'
	): Promise<JobBuild> {
		await this.checkout(branchName);
		const gitCommand = `git log -1 --format="%an|%B" ${commitHash}`;
		const { stdout } = await execPromise(gitCommand, {
			cwd: localRepoPath,
		});

		const [authorName, commitMessage] = String(stdout)
			.replace(/\n/g, '')
			.split('|');

		return { authorName, commitMessage, branchName };
	}
}
