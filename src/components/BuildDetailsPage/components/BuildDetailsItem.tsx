import React, { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';
import SuccessSvg from 'assets/images/success.svg';

import { BranchNameItem } from 'src/core/components/BranchNameItem';
import { DateTimeSection } from 'src/core/components/DateTimeSection';
import { JobNumberItem } from 'src/core/components/JobNumberItem/JobNumberItem';
import { JobStatus } from 'src/core/enums/JobStatus';
import { Text } from 'src/core/theme';
import { BoxShadow, FlexBox, BlockContainer } from 'src/core/theme/common';

import { LineDeviderItem } from '../style';

interface BuildDetailsItemProps {
	status: JobStatus;
	commitMessage: string;
	jobNumber: number;
	start: string | null;
	duration: number | null;
}

export const BuildDetailsItem: FC<BuildDetailsItemProps> = ({
	status,
	commitMessage,
	jobNumber,
	start,
	duration,
}) => (
	<BoxShadow>
		<FlexBox>
			<img src={SuccessSvg} alt='success' />
			<BlockContainer left='10'>
				<JobNumberItem
					status={status}
					commitMessage={commitMessage}
					jobNumber={jobNumber}
				/>
				<BlockContainer top='10'>
					<FlexBox alignItems='center'>
						<BranchNameItem
							branchName='master'
							commitHash='b4636ab'
						/>
						<BlockContainer left='10'>
							<FlexBox alignItems='center'>
								<UserOutlined />
								<BlockContainer left='5'>
									<Text>Philip Kirkorov</Text>
								</BlockContainer>
							</FlexBox>
						</BlockContainer>
					</FlexBox>
					<BlockContainer top='8' bottom='8'>
						<LineDeviderItem />
					</BlockContainer>
					<FlexBox alignItems='center'>
						<DateTimeSection start={start} duration={duration} />
					</FlexBox>
				</BlockContainer>
			</BlockContainer>
		</FlexBox>
	</BoxShadow>
);
