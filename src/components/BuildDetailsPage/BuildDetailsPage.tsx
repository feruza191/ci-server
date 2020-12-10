import React, { FC } from 'react';
import { Layout } from 'src/core/layout/Layout';
import { Row, Col } from 'antd';
import { BuildDetailsItem } from './components/BuildDetailsItem';
import { BuildLogs } from './components/BuildLogs';
import { JobStatus } from '../BuildHistoryPage/types';

const buildProps = {
	status: JobStatus.Fail,
	commitMessage: 'add documentation for postgres scaler',
	jobNumber: 1564,
	start: '22 янв, 03:06',
	duration: 26,
};

export const BuildDetails: FC = () => (
	<Layout>
		<Row>
			<Col xs={24}>
				<BuildDetailsItem {...buildProps} />
				<BuildLogs />
			</Col>
		</Row>
	</Layout>
);
