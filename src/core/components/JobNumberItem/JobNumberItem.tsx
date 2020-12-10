import React, { FC } from 'react';
import { JobStatus } from 'src/components/BuildHistoryPage/types';
import { MarginContainer } from '../../theme/common';
import { Text, fontSize } from '../../theme';
import { JobNumberWrapper, JobNumber } from './style';

export interface JobNumberItemProps {
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
			{`#${jobNumber}`}
		</JobNumber>
		<MarginContainer left='5' top='8' />
		<Text>{commitMessage}</Text>
	</JobNumberWrapper>
);
