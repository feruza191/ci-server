import styled from 'styled-components';

import { device } from 'client/core/theme';
import { LineDevider } from 'client/core/theme/common';
import { CONSTANT_PALETTES } from 'client/core/theme/palette';

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
