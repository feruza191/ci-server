import React, { FC } from 'react';

import { Text } from '../theme';
import { FlexBox, BlockContainer } from '../theme/common';
import CalendarSvg from 'assets/images/calendar.svg';
import ClockSvg from 'assets/images/clock.svg';

interface DateTimeSectionProps {
	start: string | null;
	duration: number | null;
}

export const DateTimeSection: FC<DateTimeSectionProps> = ({
	start,
	duration,
}) => (
	<>
		<FlexBox>
			<img src={CalendarSvg} alt="calendar" />
			<BlockContainer left="5">
				<Text>{start}</Text>
			</BlockContainer>
		</FlexBox>
		<BlockContainer left="10">
			<FlexBox>
				<img src={ClockSvg} alt="clock" />
				<BlockContainer left="5">
					<Text>{duration}</Text>
				</BlockContainer>
			</FlexBox>
		</BlockContainer>
	</>
);
