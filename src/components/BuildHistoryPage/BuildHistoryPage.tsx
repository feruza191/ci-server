import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { BUILD_DETAILS_PATH } from 'src/constants';
import { Layout } from '../../core/layout/Layout';
import { JobStatus } from './types';
import TextKey from '../../core/theme/textKeys';
import { ShowMoreButton } from './style';
import { BuildItem } from './components/BuildItem';

const jobs = [
	{
		id: '1',
		jobNumber: 1368,
		commitMessage: 'add documentation for postgres scaler',
		commitHash: '9c9f0b9',
		branchName: 'master',
		status: JobStatus.Success,
		start: '21 янв, 03:06',
		finish: '21.10.2020 3:20',
		duration: 30,
		jobLogs: 'jobLogs',
		buildCommand: 'buildCommand',
	},
	{
		id: '2',
		jobNumber: 1369,
		commitMessage:
			'Super cool UI kit for making websites that look like games',
		commitHash: '952e5567',
		branchName: 'super-cool-ui-kit',
		status: JobStatus.Fail,
		start: '22 янв, 03:06',
		finish: '21.10.2020 3:20',
		duration: 26,
		jobLogs: 'jobLogs',
		buildCommand: 'buildCommand',
	},
	{
		id: '3',
		jobNumber: 1370,
		commitMessage: 'Merge branch master of github.com:jaywcjlove/awesome',
		commitHash: 'b4636ab',
		branchName: 'master',
		status: JobStatus.Waiting,
		start: '23 янв, 03:06',
		finish: '21.10.2020 3:20',
		duration: 20,
		jobLogs: 'jobLogs',
		buildCommand: 'buildCommand',
	},
];

export const BuildHistory: FC = () => {
	const displayBuildItem = () =>
		jobs.map((job) => <BuildItem key={job.id} job={job} />);

	return (
		<Layout>
			<Row>
				<Col xs={24}>
					<Link to={BUILD_DETAILS_PATH}>{displayBuildItem()}</Link>
					<ShowMoreButton bg='secondary' width='92'>
						{TextKey.ShowMore}
					</ShowMoreButton>
				</Col>
			</Row>
		</Layout>
	);
};
