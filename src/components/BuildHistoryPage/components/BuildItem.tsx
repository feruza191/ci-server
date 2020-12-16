import React, { FC } from 'react';

import {
	DateTimeSectionDesktop,
	DateTimeSectionMobile,
	LineDeviderItem,
} from '../style';
import CalendarSvg from 'assets/images/calendar.svg';
import ClockSvg from 'assets/images/clock.svg';
import { BranchNameItem } from 'src/core/components/BranchNameItem';
import { DateTimeSection } from 'src/core/components/DateTimeSection';
import { IconState } from 'src/core/components/IconState';
import { JobNumberItem } from 'src/core/components/JobNumberItem/JobNumberItem';
import { JobStatus } from 'src/core/enums/JobStatus';
import { Text } from 'src/core/theme';
import { BoxShadow, FlexBox, BlockContainer } from 'src/core/theme/common';

interface JobItem {
	id: string;
	jobNumber: number;
	commitMessage: string;
	commitHash: string;
	branchName: string;
	status: JobStatus;
	start: string | null;
	finish: string | null;
	duration: number | null;
	jobLogs: string | null;
	buildCommand: string;
}

interface JobProps {
	job: JobItem;
}

export const BuildItem: FC<JobProps> = ({ job }) => {
	const {
		start,
		duration,
		commitMessage,
		branchName,
		commitHash,
		status,
		jobNumber,
	} = job;

	return (
		<BoxShadow>
			<FlexBox alignItems="center" justifyContent="space-between">
				<FlexBox>
					<IconState status={status} />
					<BlockContainer left="10">
						<JobNumberItem
							status={status}
							commitMessage={commitMessage}
							jobNumber={jobNumber}
						/>
						<BlockContainer top="10">
							<BranchNameItem
								branchName={branchName}
								commitHash={commitHash}
							/>
						</BlockContainer>

						<BlockContainer top="8" bottom="8">
							<LineDeviderItem />
						</BlockContainer>

						<DateTimeSectionMobile>
							<DateTimeSection
								start={start}
								duration={duration}
							/>
						</DateTimeSectionMobile>
					</BlockContainer>
				</FlexBox>
				<DateTimeSectionDesktop>
					<FlexBox>
						<img src={CalendarSvg} alt="calendar" />
						<BlockContainer left="5">
							<Text>{start}</Text>
						</BlockContainer>
					</FlexBox>
					<BlockContainer top="10">
						<FlexBox>
							<img src={ClockSvg} alt="clock" />
							<BlockContainer left="5">
								<Text>{duration}</Text>
							</BlockContainer>
						</FlexBox>
					</BlockContainer>
				</DateTimeSectionDesktop>
			</FlexBox>
		</BoxShadow>
	);
};
