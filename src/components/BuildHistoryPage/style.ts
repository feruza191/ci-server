import styled from 'styled-components';
import { LineDevider } from 'src/core/theme/common';
import { device } from '../../core/theme';
import { Button } from '../../core/atoms/Button';

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
