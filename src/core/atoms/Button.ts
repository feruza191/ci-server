import { Button as ButtonStyle } from 'antd';
import styled from 'styled-components';

import { palette, fontSize, fontWeight } from '../theme';

interface ButtonProps {
	bg?: string;
	width?: string;
	height?: string;
}

export const Button = styled(ButtonStyle)<ButtonProps>`
	background: ${({ bg }) => {
		if (bg === 'primary') {
			return palette.yellow;
		}
		if (bg === 'secondary') {
			return palette.greyDarker;
		}
	}};
	width: ${({ width }) => (width ? `${width}px` : 'auto')};
	height: ${(props) => props.height || '36'}px;
	font-size: ${fontSize.small}px;
	font-weight: ${fontWeight.regular};
	border-radius: 4px;
	border: none;

	&.ant-btn:hover {
		color: ${palette.black};
		background: ${({ bg }) => {
			if (bg === 'primary') {
				return palette.yellowHovered;
			}
			if (bg === 'secondary') {
				return palette.greyHovered;
			}
		}};
	}
	&.ant-btn:focus {
		color: ${palette.black};
		background: ${({ bg }) => {
			if (bg === 'primary') {
				return palette.yellowFocused;
			}
			if (bg === 'secondary') {
				return palette.greyFocused;
			}
		}};
	}
`;
