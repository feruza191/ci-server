import styled from 'styled-components';
import { MarginContainerProps, FlexBoxProps } from './types';

export const FlexBox = styled.div<FlexBoxProps>`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || 'row'};
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	align-items: ${(props) => props.alignItems || 'flex-start'};
	align-content: ${(props) => props.alignContent || 'flex-start'};
`;

export const MarginContainer = styled.div<MarginContainerProps>`
	margin-top: ${(props) => (props.top ? props.top : 0)}px;
	margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
	margin-left: ${(props) => (props.left ? props.left : 0)}px;
	margin-right: ${(props) => (props.right ? props.right : 0)}px;
`;
