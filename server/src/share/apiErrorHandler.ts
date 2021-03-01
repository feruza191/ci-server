import { Request, Response, NextFunction } from 'express';

import { ErrorHandler } from './errorHandler';
import { HttpCodes } from './enum';

const apiErrorHandler = (
	err: Error,
	_: Request,
	res: Response<string>,
	_next: NextFunction
): Promise<Response<string>> | undefined => {
	// if our error is expected error, then it is somthing that we want to return to the user
	if (err instanceof ErrorHandler) {
		res.status(err.httpCode).json(err.message);
		return;
	}
	// generic internal server error
	res.status(HttpCodes.ServerError).json('Something went wrong!');
};

export default apiErrorHandler;
