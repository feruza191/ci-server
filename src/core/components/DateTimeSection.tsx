import React, { FC } from 'react';
import CalendarSvg from 'src/assets/images/calendar.svg';
import ClockSvg from 'src/assets/images/clock.svg';
import { FlexBox, MarginContainer } from '../theme/common';
import { Text } from '../theme';

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
			<img src={CalendarSvg} />
			<MarginContainer left='5' />
			<Text>{start}</Text>
		</FlexBox>
		<MarginContainer left='10' />
		<FlexBox>
			<img src={ClockSvg} />
			<MarginContainer left='5' />
			<Text>{duration}</Text>
		</FlexBox>
	</>
);
