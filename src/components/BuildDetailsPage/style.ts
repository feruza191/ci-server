import styled from 'styled-components';
import { CONSTANT_PALETTES } from 'src/core/theme/palette';
import { device } from 'src/core/theme';
import { LineDevider } from 'src/core/theme/common';

export const BuildLogsWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: ${CONSTANT_PALETTES.greyBg};
	padding: 8px 12px;
	border-radius: 6px;
`;

export const LineDeviderItem = styled(LineDevider)`
	@media ${device.desktopL} {
		display: block;
	}
`;
