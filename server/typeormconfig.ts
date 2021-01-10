import { ConnectionOptions } from 'typeorm';

import { Job } from './src/Jobs/entity/job';

export const typeOrmConfig: ConnectionOptions = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [Job],
	migrations: ['server/migration/**/*.ts', 'server/migration/**/*.js'],
	subscribers: ['server/subscriber/**/*.ts', 'server/subscriber/**/*.js'],
	cli: {
		entitiesDir: 'server/entity',
		migrationsDir: 'server/migration',
		subscribersDir: 'server/subscriber',
	},
};
