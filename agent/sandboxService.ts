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

	public async gitClone(repoName: string): Promise<void> {
		const gitCommand = `cd clonedProject && git clone https://github.com/${repoName} `;

		try {
			await execPromise(gitCommand);
		} catch (err) {
			console.error({ err });
			throw Error(`${TextKeys.FailedToCloneRepository} ${repoName}`);
		}
	}

	public async installDependencies(commitHash: string): Promise<void> {
		const gitCommand = `git checkout ${commitHash}`;
		const npmCommand = `npm i`;

		try {
			await this.moveToDirectoryRunCommand(gitCommand);
			await execPromise(npmCommand);
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToInstallDependencies}`);
		}
	}

	public async runCheckCommands(command: string): Promise<string> {
		try {
			const { stdout, stderr } = await execPromise(command);

			if (stdout) {
				return stdout;
			}

			return stderr;
		} catch (err) {
			console.log({ err });
			throw Error(`${TextKeys.FailedToRunCheckCommands}`);
		}
	}
}
