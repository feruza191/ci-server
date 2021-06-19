import React, { FC, useEffect, useContext } from 'react';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import { ShowMoreButton } from './style';
import { BUILD_DETAILS_PATH } from 'client/constants';
import TextKey from 'client/core/enums/TextKeys';
import { Layout } from 'client/core/layout/Layout';
import { BuildItem } from './components/BuildItem';
import { BuildHistoryContext } from './BuildHistoryStore';

const BuildHistory: FC = observer(() => {
	const store = useContext(BuildHistoryContext);

	useEffect(() => {
		store.getJobs();
	}, []);

	if (!store.jobs) {
		return <Spin />;
	}

	return (
		<Layout>
			<Row>
				<Col xs={24}>
					{store.jobs.map((job) => (
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
});

export default BuildHistory;
