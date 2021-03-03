import { Request, Response, NextFunction } from 'express';

import { AppError } from './appError';
import { HttpCodes } from './enums/HttpCodes';
import TextKeys from './enums/TextKeys';

const apiErrorHandler = (
	err: Error,
	_: Request,
	res: Response<string>,
	_next: NextFunction
): Promise<Response<string>> | undefined => {
	// if our error is expected error, then it is somthing that we want to return to the user
	if (err instanceof AppError) {
		res.status(err.httpCode).json(err.message);
		return;
	}
	// generic internal server error
	res.status(HttpCodes.ServerError).json(TextKeys.SomethingWentWrong);
};

export default apiErrorHandler;
