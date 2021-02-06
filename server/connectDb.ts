/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import {
	getConnection,
	createConnection,
	ConnectionOptions,
	Connection,
} from 'typeorm';

export async function connectDb(
	typeOrmConfig: ConnectionOptions,
	retries = 5
): Promise<Connection | undefined> {
	let currentRetry = retries;

	while (currentRetry) {
		try {
			await createConnection(typeOrmConfig);
			return;
		} catch (err) {
			// Почему-то у typeorm возникает проблема с подключением
			// Нужно для подключения к текущему соеденению
			if (err.name === 'AlreadyHasActiveConnectionError') {
				return getConnection('default');
			}

			currentRetry -= 1;
			console.log({ err });
			console.log(`Осталось попыток: ${currentRetry}`);
			// wait 5 seconds
			await new Promise((res) => setTimeout(res, 5000));
		}
	}
}
