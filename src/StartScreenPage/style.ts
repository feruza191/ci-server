import styled from 'styled-components';
import { FLEX_HORIZONTAL } from '../core/theme/common';
import { Text } from '../core/theme';

export const InstrumentLogo = styled.img``;

export const StartScreenWrapper = styled.div`
	${FLEX_HORIZONTAL};
	flex-direction: column;
	height: 84vh;
`;

export const SettingsText = styled(Text)`
	flex-flow: wrap;
	width: 200px;
`;
