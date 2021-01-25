/* eslint-disable no-console */
import { exec } from 'child_process';
import util from 'util';

export class Services {
	// eslint-disable-next-line class-methods-use-this
	public async gitClone(repoName: string): Promise<void> {
		const execPromise = util.promisify(exec);
		const gitCommand = `git clone ${repoName}`;

		try {
			const { stdout, stderr } = await execPromise(gitCommand);
			console.log({ stdout });
			console.log({ stderr });
		} catch (err) {
			console.error({ err });
		}
	}
}
