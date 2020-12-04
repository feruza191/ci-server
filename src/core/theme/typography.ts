import styled from 'styled-components';
import { CommonTextProps, TextProps } from './types';
import { CONSTANT_PALETTES } from './palette';

const CommonTextProperties = styled.div<CommonTextProps>`
	text-align: ${({ align }) => {
		if (align === 'center') {
			return 'center';
		}
		return 'right';
	}};
	color: ${({ type }) => {
		if (type === 'secondary') {
			return CONSTANT_PALETTES.greyDark;
		}
		return CONSTANT_PALETTES.black;
	}};
`;

export const TextConfig = styled(CommonTextProperties)<TextProps>`
	font-size: ${(props) => props.fontSize || '14'}px;
	line-height: ${(props) => props.lineHeight}px;
	font-weight: ${(props) => props.fontWeight || 400};
`;
