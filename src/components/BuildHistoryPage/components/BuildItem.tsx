import React, { FC } from 'react';
import { JobNumberItem } from 'src/core/components/JobNumberItem/JobNumberItem';
import { DateTimeSection } from 'src/core/components/DateTimeSection';
import { BranchNameItem } from 'src/core/components/BranchNameItem';
import { Text } from '../../../core/theme';
import {
	DateTimeSectionDesktop,
	DateTimeSectionMobile,
	LineDeviderItem,
} from '../style';
import {
	BoxShadow,
	FlexBox,
	MarginContainer,
} from '../../../core/theme/common';
import SuccessSvg from '../../../assets/images/success.svg';
import CalendarSvg from '../../../assets/images/calendar.svg';
import ClockSvg from '../../../assets/images/clock.svg';
import FailSvg from '../../../assets/images/fail.svg';
import WaitingSvg from '../../../assets/images/waiting.svg';
import { JobProps, JobStatus } from '../types';

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

	const handleJobStatus = () => {
		switch (status) {
			case JobStatus.Success:
				return <img src={SuccessSvg} />;
			case JobStatus.Fail:
				return <img src={FailSvg} />;
			case JobStatus.Waiting:
				return <img src={WaitingSvg} />;

			default:
				break;
		}
	};

	return (
		<BoxShadow>
			<FlexBox alignItems='center' justifyContent='space-between'>
				<FlexBox>
					{handleJobStatus()}
					<MarginContainer left='10' />
					<div>
						<JobNumberItem
							status={status}
							commitMessage={commitMessage}
							jobNumber={jobNumber}
						/>
						<MarginContainer top='10' />
						<BranchNameItem
							branchName={branchName}
							commitHash={commitHash}
						/>

						<MarginContainer top='8' />
						<LineDeviderItem />
						<MarginContainer top='8' />
						<DateTimeSectionMobile>
							<DateTimeSection
								start={start}
								duration={duration}
							/>
						</DateTimeSectionMobile>
					</div>
				</FlexBox>
				<DateTimeSectionDesktop>
					<FlexBox>
						<img src={CalendarSvg} />
						<MarginContainer left='5' />
						<Text>{start}</Text>
					</FlexBox>
					<MarginContainer top='10' />
					<FlexBox>
						<img src={ClockSvg} />
						<MarginContainer left='5' />
						<Text>{duration}</Text>
					</FlexBox>
				</DateTimeSectionDesktop>
			</FlexBox>
		</BoxShadow>
	);
};
