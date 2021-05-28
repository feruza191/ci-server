import React, { FC } from 'react';

import { JobStatus } from 'client/core/enums/JobStatus';
import { Text, fontSize } from 'client/core/theme';
import { BlockContainer } from 'client/core/theme/common';
import { JobNumberWrapper, JobNumber } from './style';

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
