/* eslint-disable no-console */
import { exec } from 'child_process';
import util from 'util';

import TextKeys from './TextKeys';

interface JobBuild {
	authorName: string;
	commitMessage: string;
	branchName: string;
}

const localRepoPath = 'clonedProjects/my-mobx';
const execPromise = util.promisify(exec);

export class SandboxService {
	public async gitClone(repoName: string): Promise<void> {
		const gitCommand = `git clone https://github.com/${repoName}`;

		try {
			await execPromise(gitCommand);
		} catch (err) {
			console.error({ err });
		}
	}

	private async checkout(branchName: string) {
		try {
			const gitCommand = `cd ${localRepoPath} && ${TextKeys.GitCheckout} ${branchName}`;
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
