import styled from 'styled-components';
import { CommonTextProps, TextProps } from './types';
import { CONSTANT_PALETTES } from './palette';

export const fontSizes: Record<string, number> = {
	micro: 12,
	small: 14,
	normal: 16,
	semiMedium: 18,
	medium: 24,
	large: 30,
	extraLarge: 36,
};

export const fontWeights: Record<string, number> = {
	light: 300,
	regular: 400,
	medium: 500,
	bold: 600,
};

export const lineHeights: Record<string, number> = {
	micro: 18,
	small: 21,
	normal: 24,
	semiMedium: 27,
	medium: 28,
	large: 35,
	extraLarge: 40,
};

const CommonTextProperties = styled.div<CommonTextProps>`
	text-align: ${({ align }) => {
		if (align === 'center') {
			return 'center';
		}
		if (align === 'right') {
			return 'right';
		}
	}};
	color: ${({ type }) => {
		if (type === 'secondary') {
			return CONSTANT_PALETTES.greyDark;
		}
		return CONSTANT_PALETTES.black;
	}};
`;

export const TextConfig = styled(CommonTextProperties)<TextProps>`
	font-size: ${(props) => props.fontSize || fontSizes.small}px;
	line-height: ${(props) => props.lineHeight || lineHeights.small}px;
	font-weight: ${(props) => props.fontWeight || fontWeights.regular};
`;
