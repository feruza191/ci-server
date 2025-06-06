import React, { ReactElement } from 'react';

import CalendarSvg from 'assets/images/calendar.svg';
import ClockSvg from 'assets/images/clock.svg';
import { Text } from '../theme';
import { FlexBox, BlockContainer } from '../theme/common';

interface Props {
	start: string | null;
	duration: number | null;
}

export const DateTimeSection = ({ start, duration }: Props): ReactElement => (
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
