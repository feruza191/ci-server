import React, { FC, useContext, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';

import { Layout } from 'client/core/layout/Layout';
import { BuildLogs } from './components/BuildLogs';
import { BuildDetailsItem } from './components/BuildDetailsItem';
import { BuildDetailsContext } from './BuildDetailsStore';

const BuildDetails: FC<RouteComponentProps> = observer(({ location }) => {
	const store = useContext(BuildDetailsContext);
	const { jobId } = location.state;

	useEffect(() => {
		store.getJob(jobId);
	}, []);

	if (!store.job) {
		return <Spin />;
	}

	return (
		<Layout>
			<Row>
				<Col xs={24}>
					<BuildDetailsItem {...store.job} />
					<BuildLogs jobLogs={store.job.jobLogs} />
				</Col>
			</Row>
		</Layout>
	);
});

export default BuildDetails;
