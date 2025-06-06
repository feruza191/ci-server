import React, { ReactElement } from 'react';
import { UserOutlined } from '@ant-design/icons';

import { BranchNameItem } from 'client/core/components/BranchNameItem';
import { DateTimeSection } from 'client/core/components/DateTimeSection';
import { IconState } from 'client/core/components/IconState';
import { JobNumberItem } from 'client/core/components/JobNumberItem/JobNumberItem';
import { JobStatus } from 'client/core/enums/JobStatus';
import { Text } from 'client/core/theme';
import { BoxShadow, FlexBox, BlockContainer } from 'client/core/theme/common';
import { LineDeviderItem } from '../style';

interface Props {
	status: JobStatus;
	commitMessage: string;
	branchName: string;
	commitHash: string;
	jobNumber: number;
	start: string | null;
	authorName: string | null;
	duration: number | null;
}

export const BuildDetailsItem = ({
	status,
	commitMessage,
	jobNumber,
	start,
	duration,
	branchName,
	commitHash,
	authorName,
}: Props): ReactElement => (
	<BoxShadow>
		<FlexBox>
			<IconState status={status} />
			<BlockContainer left="10">
				<JobNumberItem
					status={status}
					commitMessage={commitMessage}
					jobNumber={jobNumber}
				/>
				<BlockContainer top="10">
					<FlexBox alignItems="center">
						<BranchNameItem
							branchName={branchName}
							commitHash={commitHash}
						/>
						<BlockContainer left="10">
							<FlexBox alignItems="center">
								<UserOutlined />
								<BlockContainer left="5">
									<Text>{authorName}</Text>
								</BlockContainer>
							</FlexBox>
						</BlockContainer>
					</FlexBox>
					<BlockContainer top="8" bottom="8">
						<LineDeviderItem />
					</BlockContainer>
					<FlexBox alignItems="center">
						<DateTimeSection start={start} duration={duration} />
					</FlexBox>
				</BlockContainer>
			</BlockContainer>
		</FlexBox>
	</BoxShadow>
);
