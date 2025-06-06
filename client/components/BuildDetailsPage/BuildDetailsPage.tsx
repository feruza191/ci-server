import React, { useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'client/core/layout/Layout';
import { BuildLogs } from './components/BuildLogs';
import { BuildDetailsItem } from './components/BuildDetailsItem';
import { getJobAction } from 'client/store/actions/jobs.actions';
import { getJob } from 'client/store/selectors/selectors';

type Props = RouteComponentProps<{ jobId: string }>;

const BuildDetails = ({ location }: Props): React.ReactElement => {
	const dispatch = useDispatch();
	const job = useSelector(getJob);
	const { jobId } = location.state;

	useEffect(() => {
		dispatch(getJobAction(jobId));
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
