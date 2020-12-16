import React, { FC } from 'react';

import { Text, fontSize } from '../../theme';
import { BlockContainer } from '../../theme/common';
import { JobNumberWrapper, JobNumber } from './style';
import { JobStatus } from 'src/core/enums/JobStatus';

interface JobNumberItemProps {
	status: JobStatus;
	commitMessage: string;
	jobNumber: number;
}

export const JobNumberItem: FC<JobNumberItemProps> = ({
	status,
	commitMessage,
	jobNumber,
}) => (
	<JobNumberWrapper>
		<JobNumber status={status} fontSize={fontSize.semiMedium}>
			#{jobNumber}
		</JobNumber>
		<BlockContainer left="5">
			<Text>{commitMessage}</Text>
		</BlockContainer>
	</JobNumberWrapper>
);
