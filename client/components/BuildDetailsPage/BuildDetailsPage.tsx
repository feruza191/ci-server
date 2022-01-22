import React, { FC, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';

import { Layout } from 'client/core/layout/Layout';
import { useStore } from 'client/shared/customHooks/useStore';
import { BuildLogs } from './components/BuildLogs';
import { BuildDetailsItem } from './components/BuildDetailsItem';

type Props = RouteComponentProps<{ jobId: string }>;

const BuildDetails: FC<Props> = observer(({ location }) => {
	const store = useStore();
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
