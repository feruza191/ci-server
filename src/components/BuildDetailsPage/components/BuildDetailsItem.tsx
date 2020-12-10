import React, { FC } from 'react';
import { BoxShadow, FlexBox, MarginContainer } from 'src/core/theme/common';
import { JobNumberItem } from 'src/core/components/JobNumberItem/JobNumberItem';
import { BranchNameItem } from 'src/core/components/BranchNameItem';
import SuccessSvg from 'src/assets/images/success.svg';
import { DateTimeSection } from 'src/core/components/DateTimeSection';
import { UserOutlined } from '@ant-design/icons';
import { Text } from 'src/core/theme';
import { JobStatus } from 'src/components/BuildHistoryPage/types';
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
			<img src={SuccessSvg} />
			<MarginContainer left='10' />
			<div>
				<JobNumberItem
					status={status}
					commitMessage={commitMessage}
					jobNumber={jobNumber}
				/>
				<MarginContainer top='10' />
				<FlexBox alignItems='center'>
					<BranchNameItem branchName='master' commitHash='b4636ab' />
					<MarginContainer left='10' />
					<FlexBox alignItems='center'>
						<UserOutlined />
						<MarginContainer left='5' />
						<Text>Philip Kirkorov</Text>
					</FlexBox>
				</FlexBox>
				<MarginContainer top='8' />
				<LineDeviderItem />
				<MarginContainer top='8' />
				<FlexBox alignItems='center'>
					<DateTimeSection start={start} duration={duration} />
				</FlexBox>
			</div>
		</FlexBox>
	</BoxShadow>
);
