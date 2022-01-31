/* eslint-disable no-console */
import { exec } from 'child_process';
import util from 'util';

import TextKeys from '../server/src/share/enums/TextKeys';

const execPromise = util.promisify(exec);

export class SandboxService {
	public async gitClone(repoName: string): Promise<void> {
		const gitCommand = `git clone https://github.com/${repoName}`;

		try {
			await execPromise(gitCommand);
		} catch (err) {
			console.error({ err });
			throw Error(`${TextKeys.FailedToCloneRepository} ${repoName}`);
		}
	}

	public async installDependencies(
		repoName: string,
		commitHash: string
	): Promise<void> {
		const gitCommand = `npm install https://github.com/${repoName}#${commitHash}`;

		try {
			const { stdout, stderr } = await execPromise(gitCommand);

			console.log({ stdout });
			console.log({ stderr });
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToInstallDependencies}`);
		}
	}

	public async runCheckCommands(): Promise<void> {
		const gitCommand1 = 'npm run eslint';
		const gitCommand2 = 'npm run prettier';
		const gitCommand3 = 'npm run ts-check';
		try {
			const { stdout, stderr } = await execPromise(gitCommand1);
			const { stdout, stderr } = await execPromise(gitCommand2);
			const { stdout, stderr } = await execPromise(gitCommand3);
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToRunCheckCommands}`);
		}
	}
}
