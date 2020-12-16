import React, { FC } from 'react';

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { BuildItem } from './components/BuildItem';
import { jobs } from './jobs';
import { ShowMoreButton } from './style';
import { BUILD_DETAILS_PATH } from 'src/constants';
import TextKey from 'src/core/enums/TextKeys';
import { Layout } from 'src/core/layout/Layout';

export const BuildHistory: FC = () => (
	<Layout>
		<Row>
			<Col xs={24}>
				<Link to={BUILD_DETAILS_PATH}>
					{jobs.map((job) => (
						<BuildItem key={job.id} job={job} />
					))}
				</Link>
				<ShowMoreButton bg="secondary">
					{TextKey.ShowMore}
				</ShowMoreButton>
			</Col>
		</Row>
	</Layout>
);
