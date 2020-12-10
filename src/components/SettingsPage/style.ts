import styled from 'styled-components';
import { Form } from 'antd';
import { FlexBox } from '../../core/theme/common';
import { device } from '../../core/theme';

export const FormTime = styled(Form.Item)`
	margin-bottom: 0;
`;

export const ButtonsWrapper = styled(FlexBox)`
	margin-top: 20px;

	@media ${device.mobileL} {
		display: block;

		.ant-btn {
			width: 100%;
			margin-bottom: 12px;
		}
	}
`;
