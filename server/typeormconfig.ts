import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

import { Job } from './src/Jobs/job.entity';
import { Settings } from './src/Settings/settings.entity';

dotenv.config({ path: path.resolve(__filename, '.env.local') });
dotenv.config({ path: path.resolve(__filename, '.env') });

export const typeOrmConfig: ConnectionOptions = {
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: Number(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	synchronize: true,
	logging: false,
	entities: [Job, Settings],
	migrations: ['server/migration/**/*.ts', 'server/migration/**/*.js'],
	subscribers: ['server/subscriber/**/*.ts', 'server/subscriber/**/*.js'],
	cli: {
		entitiesDir: 'server/entity',
		migrationsDir: 'server/migration',
		subscribersDir: 'server/subscriber',
	},
};
