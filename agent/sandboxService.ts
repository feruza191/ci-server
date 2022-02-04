import { exec } from 'child_process';
import util from 'util';

import TextKeys from '../server/src/share/enums/TextKeys';

const execPromise = util.promisify(exec);

const localRepoPath = 'clonedProject/my-mobx';

export class SandboxService {
	private async moveToDirectoryRunCommand(command: string): Promise<void> {
		const gitCommand = `cd ${localRepoPath} && ${command}`;

		await execPromise(gitCommand);
	}

	private async moveToDirectoryRunCommandReturnResult(
		command: string
	): Promise<string> {
		const gitCommand = `cd ${localRepoPath} && ${command}`;

		const { stdout, stderr } = await execPromise(gitCommand);

		if (stdout) {
			return stdout;
		}

		return stderr;
	}

	private async gitClone(repoName: string): Promise<void> {
		const gitCommand = `cd clonedProject && git clone https://github.com/${repoName} `;

		try {
			await execPromise(gitCommand);
		} catch (err) {
			console.error({ err });
			throw Error(`${TextKeys.FailedToCloneRepository} ${repoName}`);
		}
	}

	private async installDependencies(commitHash: string): Promise<void> {
		const gitCommand = `git checkout ${commitHash}`;
		const npmCommand = `npm i`;

		try {
			await this.moveToDirectoryRunCommand(gitCommand);
			await this.moveToDirectoryRunCommand(npmCommand);
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToInstallDependencies}`);
		}
	}

	private async runCheckCommands(command: string): Promise<string> {
		try {
			const result = await this.moveToDirectoryRunCommandReturnResult(
				command
			);

			return result;
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToRunCheckCommands}`);
		}
	}

	public async run(
		command: string,
		repoName: string,
		commitHash: string
	): Promise<string> {
		try {
			await this.gitClone(repoName);
			await this.installDependencies(commitHash);
			const result = await this.runCheckCommands(command);

			return result;
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToRunCheckCommands}`);
		}
	}
}
