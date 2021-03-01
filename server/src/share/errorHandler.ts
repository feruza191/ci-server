export class ErrorHandler extends Error {
	public readonly message: string;

	public readonly httpCode: number;

	constructor(message: string, httpCode: number) {
		super();

		Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

		this.message = message;
		this.httpCode = httpCode;

		Error.captureStackTrace(this);
	}
}
