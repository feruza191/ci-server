import React, { ReactElement } from 'react';

import CalendarSvg from 'assets/images/calendar.svg';
import ClockSvg from 'assets/images/clock.svg';
import { BranchNameItem } from 'client/core/components/BranchNameItem';
import { DateTimeSection } from 'client/core/components/DateTimeSection';
import { IconState } from 'client/core/components/IconState';
import { JobNumberItem } from 'client/core/components/JobNumberItem/JobNumberItem';
import { Text } from 'client/core/theme';
import { BoxShadow, FlexBox, BlockContainer } from 'client/core/theme/common';
import {
	DateTimeSectionDesktop,
	DateTimeSectionMobile,
	LineDeviderItem,
} from '../style';
import { JobItem } from 'client/types/types';

interface Props {
	job: JobItem;
}

export const BuildItem = ({ job }: Props): ReactElement => {
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
