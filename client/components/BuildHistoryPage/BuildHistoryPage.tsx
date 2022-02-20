import React, { ReactElement, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ShowMoreButton } from './style';
import { BUILD_DETAILS_PATH } from 'client/constants';
import TextKey from 'client/core/enums/TextKeys';
import { Layout } from 'client/core/layout/Layout';
import { BuildItem } from './components/BuildItem';
import { getAllJobs } from 'client/store/actions/jobs.actions';
import { getJobs } from 'client/store/selectors/selectors';

const BuildHistory = (): ReactElement => {
	const dispatch = useDispatch();
	const jobs = useSelector(getJobs);

	useEffect(() => {
		dispatch(getAllJobs());
	}, []);

	if (!jobs) {
		return <Spin />;
	}

	return (
		<Layout>
			<Row>
				<Col xs={24}>
					{jobs.map((job) => (
						<Link
							to={{
								pathname: BUILD_DETAILS_PATH,
								state: { jobId: job.id },
							}}
							key={job.id}
						>
							<BuildItem job={job} />
						</Link>
					))}

					<ShowMoreButton bg="secondary">
						{TextKey.ShowMore}
					</ShowMoreButton>
				</Col>
			</Row>
		</Layout>
	);
};

export default BuildHistory;
