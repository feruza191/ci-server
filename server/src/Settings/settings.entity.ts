import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Settings {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('text')
	repoName: string;

	@Column('text')
	mainBranch: string;

	@Column('int')
	period: number;
}
