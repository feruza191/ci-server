import React, { FC } from 'react';
import { Row, Col } from 'antd';

import { Layout } from 'client/core/layout/Layout';
import { JobStatus } from 'client/core/enums/JobStatus';
import { BuildLogs } from './components/BuildLogs';
import { BuildDetailsItem } from './components/BuildDetailsItem';

const buildProps = {
	status: JobStatus.Success,
	commitMessage: 'add documentation for postgres scaler',
	jobNumber: 1564,
	start: '22 янв, 03:06',
	duration: 26,
};

const BuildDetails: FC = () => (
	<Layout>
		<Row>
			<Col xs={24}>
				<BuildDetailsItem {...buildProps} />
				<BuildLogs />
			</Col>
		</Row>
	</Layout>
);

export default BuildDetails;
