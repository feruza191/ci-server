import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Setting {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	repoName: string;

	@Column()
	mainBranch: string;

	@Column()
	period: number;
}
