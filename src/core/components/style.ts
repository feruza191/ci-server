import { Layout, Row } from 'antd';
import styled from 'styled-components';
import { palette, device, Text } from '../theme';
import { FLEX_SPACE_BETWEEN } from '../theme/common';
import Button from '../atoms/Button';

const { Content } = Layout;

export const FooterWrapper = styled(Row)`
	background: ${palette.greyLight};
	${FLEX_SPACE_BETWEEN};
	padding: 8px 100px;
	flex-shrink: 0;

	& ul {
		list-style-type: none;
		margin-bottom: 0;
		li {
			display: inline-block;
			padding-right: 12px;
			color: ${palette.greyDark};
		}
	}

	@media ${device.mobileL} {
		padding: 8px 16px;

		& ul {
			margin-bottom: 8px;
		}
	}
`;

export const HeaderWrapper = styled.div`
	margin: 0 100px;
	flex-shrink: 0;
	${FLEX_SPACE_BETWEEN};

	@media ${device.mobileL} {
		margin: 0 53px 0 16px;
	}
`;

export const CompanyLogo = styled.div`
	font-size: 24px;
	line-height: 28px;
	font-weight: 500;
	color: ${palette.greyDark};
`;

export const ContentWrapper = styled(Content)`
	flex-grow: 1;
`;

export const IconButton = styled(Button)`
	@media ${device.mobileL} {
		& > span:last-child {
			display: none;
		}
	}
`;

export const CopyRight = styled(Text)`
	@media ${device.mobileL} {
		text-align: left;
	}
`;
