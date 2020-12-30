import { ConnectionOptions } from 'typeorm';
import path from 'path';

const isCompiled = path.extname(__filename).includes('js');

export default {
	type: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	// eslint-disable-next-line radix
	port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
	username: process.env.DB_USERNAME || 'feruza',
	password: process.env.DB_PASSWORD || 'feruza12120',
	database: process.env.DB_NAME || 'ciserverdb',
	synchronize: !process.env.DB_NO_SYNC,
	logging: !process.env.DB_NO_LOGS,
	autoReconnect: true,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 2000,
	entities: [`server/entity/**/*.${isCompiled ? 'js' : 'ts'}`],
	// migrations: [`server/migration/**/*.${isCompiled ? 'js' : 'ts'}`],
} as ConnectionOptions;
