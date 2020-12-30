import { createConnection } from 'typeorm';
import ORMConfig from 'server/ormconfig';

export const connection = createConnection(ORMConfig);
