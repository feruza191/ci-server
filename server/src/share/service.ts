/* eslint-disable no-console */
import { exec } from 'child_process';
import util from 'util';

interface JobBuild {
	authorName: string;
	commitMessage: string;
	branchName: string;
}

export class Services {
	public localRepoPath = 'clonedProjects/my-mobx';

	public execPromise = util.promisify(exec);

	public async gitClone(repoName: string): Promise<void> {
		const gitCommand = `git clone https://github.com/${repoName}`;

		try {
			await this.execPromise(gitCommand);
		} catch (err) {
			console.error({ err });
		}
	}

	private async checkOut(branchName: string) {
		try {
			const gitCommand = `cd ${this.localRepoPath} && git checkout ${branchName}`;
			await this.execPromise(gitCommand);
		} catch (err) {
			console.log({ err });
			throw Error(`Could not check out to ${branchName}`);
		}
	}

	public async getCommitByHash(
		commitHash: string,
		branchName = 'master'
	): Promise<JobBuild> {
		await this.checkOut(branchName);
		const gitCommand = `git log -1 --format="%an|%B" ${commitHash}`;
		const { stdout } = await this.execPromise(gitCommand, {
			cwd: this.localRepoPath,
		});

		const [authorName, commitMessage] = String(stdout)
			.replace(/\n/g, '')
			.split('|');

		return { authorName, commitMessage, branchName };
	}
}
