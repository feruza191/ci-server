import styled from 'styled-components';
import { Button as ButtonStyle } from 'antd';
import { palette } from '../theme';

export interface ButtonProps {
	bg?: string;
	width?: string;
	height: string;
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
	width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
	height: ${(props) => props.height}px;
	font-size: 13px;
	font-weight: 400;
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
