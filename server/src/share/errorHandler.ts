export class ErrorHandler {
	code: number;

	message: string;

	constructor(code: number, message: string) {
		this.code = code;
		this.message = message;
	}

	static badRequest(msg: string): ErrorHandler {
		return new ErrorHandler(400, msg);
	}

	static notFoundRequest(msg: string): ErrorHandler {
		return new ErrorHandler(404, msg);
	}

	static internalError(msg: string): ErrorHandler {
		return new ErrorHandler(500, msg);
	}
}
