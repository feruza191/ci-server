import { Input as InputStyle, InputNumber as InputNumberStyle } from 'antd';
import styled, { css } from 'styled-components';

import { fontSize, lineHeight, fontWeight, palette } from '../theme';

interface InputProps {
	width?: string;
	height?: string;
}

const inputStyles = css<InputProps>`
	width: ${(props) => (props.width ? `${props.width}px` : '100%')};
	max-width: 100%;
	height: ${(props) => (props.height ? `${props.height}px` : '100%')};
	font-size: ${fontSize.normal}px;
	line-height: ${lineHeight.normal}px;
	font-weight: ${fontWeight.regular};
	border: 2px solid ${palette.greyBorder};
	border-radius: 4px;
	padding: 5px;
`;

export const Input = styled(InputStyle)`
	${inputStyles};
`;

export const InputNumber = styled(InputNumberStyle)`
	${inputStyles};
`;
