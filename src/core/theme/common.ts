import styled, { css } from 'styled-components';
import { MarginContainerProps } from './types';

export const DisplayFlex = styled.div`
	display: flex;
`;
export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FlexSpaceBetween = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const FlexSpaceAround = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const FlexAlignVertical = styled.div`
	display: flex;
	align-items: center;
`;
export const FlexAlignEnd = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const FlexAlignVerticallyEnd = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

export const FLEX_HORIZONTAL = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const FLEX_SPACE_BETWEEN = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const FLEX_SPACE_AROUND = css`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const MarginContainer = styled.div<MarginContainerProps>`
	margin-top: ${(props) => (props.top ? props.top : 0)}px;
	margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
	margin-left: ${(props) => (props.left ? props.left : 0)}px;
	margin-right: ${(props) => (props.right ? props.right : 0)}px;
`;
