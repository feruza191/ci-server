import { Request, Response, NextFunction } from 'express';

import { AppError } from '../server/src/share/appError';
import { HttpCodes } from '../server/src/share/enums/HttpCodes';
import TextKeys from '../server/src/share/enums/TextKeys';
import { SandboxService } from './sandboxService';

const sandBoxService = new SandboxService();

interface RunParameters {
	id: string;
	repoName: string;
	commitHash: string;
	command: string;
}

export const runAgent = async (
	req: Request<RunParameters>,
	res: Response,
	next: NextFunction
): Promise<Response<string> | undefined> => {
	try {
		const { id, repoName, commitHash, command } = req.body;

		if (!id && !repoName && !commitHash && !command) {
			throw new AppError(TextKeys.JobRunning, HttpCodes.NotFound);
		}

		const result = await sandBoxService.run(command, repoName, commitHash);

		return res.status(200).send({ message: result });
	} catch (err) {
		next(err);
	}
};
