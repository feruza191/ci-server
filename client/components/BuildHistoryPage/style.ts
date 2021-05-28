import styled from 'styled-components';

import { Button } from 'client/core/atoms/Button';
import { device } from 'client/core/theme';
import { LineDevider } from 'client/core/theme/common';

export const DateTimeSectionDesktop = styled.div`
	@media ${device.mobileL} {
		display: none;
	}
`;

export const DateTimeSectionMobile = styled.div`
	display: none;

	@media ${device.mobileL} {
		display: flex;
	}
`;

export const ShowMoreButton = styled(Button)`
	@media ${device.mobileL} {
		width: 100%;
	}
`;

export const LineDeviderItem = styled(LineDevider)`
	@media ${device.mobileL} {
		display: block;
	}
`;
