import { getConnection, createConnection, ConnectionOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function connectDb(typeOrmConfig: ConnectionOptions, retries = 5) {
	let currentRetry = retries;

	while (currentRetry) {
		try {
			// eslint-disable-next-line no-await-in-loop
			await createConnection(typeOrmConfig);
			return;
		} catch (err) {
			// Почему-то у typeorm возникает проблема с подключением
			// Нужно для подключения к текущему соеденению
			if (err.name === 'AlreadyHasActiveConnectionError') {
				return getConnection('default');
			}

			currentRetry -= 1;
			// eslint-disable-next-line no-console
			console.log({ err });
			// eslint-disable-next-line no-console
			console.log(`Осталось попыток: ${currentRetry}`);
			// wait 5 seconds
			// eslint-disable-next-line no-await-in-loop
			await new Promise((res) => setTimeout(res, 5000));
		}
	}
}
