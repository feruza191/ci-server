import { Form } from 'antd';
import styled from 'styled-components';

import { device } from 'client/core/theme';
import { FlexBox } from 'client/core/theme/common';

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
