import styled from 'styled-components';

import { device } from './index';
import { CONSTANT_PALETTES } from './palette';
import { BlockContainerProps, FlexBoxProps } from './types';

export const BlockContainer = styled.div<BlockContainerProps>`
	margin-top: ${(props) => (props.top ? props.top : 0)}px;
	margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
	margin-left: ${(props) => (props.left ? props.left : 0)}px;
	margin-right: ${(props) => (props.right ? props.right : 0)}px;
	padding: ${({ padding }) => padding};
`;

export const FlexBox = styled(BlockContainer)<FlexBoxProps>`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || 'row'};
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	align-items: ${(props) => props.alignItems || 'flex-start'};
	align-content: ${(props) => props.alignContent || 'flex-start'};
`;

export const BoxShadow = styled.div`
	box-shadow: 0px 0px 1px rgba(67, 68, 69, 0.3),
		0px 1px 1px rgba(67, 68, 69, 0.3);
	border-radius: 6px;
	padding: 12px 25px;
	margin-bottom: 10px;

	@media ${device.mobileL} {
		padding: 16px 12px;
	}
`;

export const LineDevider = styled.hr`
	margin: 0;
	height: 0;
	border: none;
	border-bottom: 1px solid ${CONSTANT_PALETTES.greyLight};
	display: none;
`;
