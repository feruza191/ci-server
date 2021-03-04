export class AppError extends Error {
	public readonly message: string;

	public readonly httpCode: number;

	constructor(message: string, httpCode: number) {
		super();

		// it takes one object methid and make it available to another object
		// this = destination, new.target.prototype - source
		Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
		this.message = message;
		this.httpCode = httpCode;

		Error.captureStackTrace(this);
	}
}
