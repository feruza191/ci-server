import { Request, Response, NextFunction } from 'express';

import { AppError } from '../server/src/share/appError';
import { HttpCodes } from '../server/src/share/enums/HttpCodes';
import TextKeys from '../server/src/share/enums/TextKeys';
import { SandboxService } from './sandboxService';

const sandBoxService = new SandboxService();

export const runAgent = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<Response<string> | undefined> => {
	try {
		const { id, repoName, commitHash, command } = req.body;

		if (!id && !repoName && !commitHash && !command) {
			throw new AppError(TextKeys.JobRunning, HttpCodes.NotFound);
		}

		await sandBoxService.gitClone(repoName);
		await sandBoxService.installDependencies(repoName, commitHash);
		await sandBoxService.runCheckCommands();

		return res.status(200).send({ message: 'Job is running' });
	} catch (err) {
		next(err);
	}
};
