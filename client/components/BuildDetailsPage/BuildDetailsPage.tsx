import React, { FC, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'client/core/layout/Layout';
import { BuildLogs } from './components/BuildLogs';
import { BuildDetailsItem } from './components/BuildDetailsItem';
import { RootState } from 'client/store/store';
import { fetchJob } from 'client/store/actions/jobs.actions';

type Props = RouteComponentProps<{ jobId: string }>;

const BuildDetails: FC<Props> = ({ location }) => {
	const dispatch = useDispatch();
	const job = useSelector((state: RootState) => state.jobs.job);
	const { jobId } = location.state;

	useEffect(() => {
		dispatch(fetchJob(jobId));
	}, []);

	if (!job) {
		return <Spin />;
	}

	return (
		<Layout>
			<Row>
				<Col xs={24}>
					<BuildDetailsItem {...job} />
					<BuildLogs jobLogs={job.jobLogs} />
				</Col>
			</Row>
		</Layout>
	);
};

export default BuildDetails;
