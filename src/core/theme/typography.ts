import styled from 'styled-components';
import { CommonTextProps, TextProps } from './types';
import { palettes } from './palette';

const CommonTextProperties = styled.div<CommonTextProps>`
	text-align: ${({ align }) => {
		if (align === 'center') {
			return 'center';
		}
		return 'right';
	}};
	color: ${({ type }) => {
		if (type === 'secondary') {
			return palettes.greyDark;
		}
		return palettes.black;
	}};
`;

export const text = styled(CommonTextProperties)<TextProps>`
	font-size: ${(props) => props.fontSize || '14'}px;
	line-height: ${(props) => props.lineHeight}px;
	font-weight: ${(props) => props.fontWeight || 400};
`;
